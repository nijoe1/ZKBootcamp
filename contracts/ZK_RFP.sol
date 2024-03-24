// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Metadata} from "./libraries/Metadata.sol";
import {Constants} from "./libraries/Constants.sol";
import "./ZKVote/ZKTreeVote.sol";

contract ZK_RFP is Constants {
    using EnumerableSet for EnumerableSet.Bytes32Set;

    /// ================================
    /// ========== Struct ==============
    /// ================================

    struct Profile {
        address anchor;
        address owner;
    }

    struct Pool {
        uint256 registrationEnds;
        uint256 votingEnds;
        uint256 threshold;
        uint256 amount;
        Metadata metadata;
        ZKTreeVote privateVoteContract;
    }

    /// @notice Stores the details of the recipients.
    struct Recipient {
        address recipientAddress;
        uint256 proposalBid;
        Status recipientStatus;
        Metadata metadata;
    }

    /// @notice Stores the details needed for initializing strategy
    struct InitializeParams {
        uint256 maxBid;
        bool useRegistryAnchor;
        bool metadataRequired;
    }

    /// @notice Stores the details needed for initializing strategy
    struct InitializeParamsCommittee {
        uint256 voteThreshold;
        InitializeParams params;
    }

    uint256 public _nonce; // Nonce used to generate the 'anchor' address

    mapping(uint256 => Pool) public poolIdInfo;

    mapping(uint256 => EnumerableSet.Bytes32Set) poolIdToRecipients;

    mapping(bytes32 => Recipient) public recipientInfo;

    mapping(uint256 => Recipient) public poolWinner;

    constructor(
        address _registry,
        address _allo,
        string memory _name,
        Metadata memory _metadata,
        address _hasher,
        address _verifier
    ) {
        Allo = IAllo(_allo);
        Registry = IRegistry(_registry);
        profileId = Registry.createProfile(++_nonce, _name, _metadata, address(this), _members);
        hasher = _hasher;
        verifier = _verifier;
    }


    /// ================================

    function createPool(
        InitializeParamsCommittee memory initializeParams,
        Metadata memory _metadata,
        address[] memory _managers,
        uint256 _registrationDuration,
        uint256 _votingDuration
    ) external payable {
        uint256 _registrationEnds = getTime() + _registrationDuration;

        uint256 _votingEnds = _registrationEnds + _votingDuration;

        initializeParams.voteThreshold = 1;

        bytes memory _initStrategyData = abi.encode(initializeParams);

        uint256 poolID = Allo.createPool{value:msg.value}(
            profileId,
            strategy_implementation,
            _initStrategyData,
            NATIVE,
            msg.value,
            _metadata,
            _members
        );

        ZKTreeVote newContract = new ZKTreeVote(levels, hasher, verifier, _managers);

        poolIdInfo[poolID] = Pool({
            registrationEnds: _registrationEnds,
            votingEnds: _votingEnds,
            threshold: initializeParams.voteThreshold,
            amount: msg.value,
            metadata: _metadata,
            privateVoteContract: newContract
        });
        
    }

    function registerRecipient(
        uint256 _poolId,
        Metadata memory _metadata
    ) external {
        bytes32 _profileId = Registry.createProfile(++_nonce, _name, _metadata, msg.sender, _members);

        bytes memory _data = abi.encode(_profileId, _metadata);

        Allo.registerRecipient(_poolId, _data);
    }

    function registerValidator(
        uint256 _poolId,
        address _validator
    ) external {
        // TODO PROVE THE RECIPIENT IS ABOVE A CERTAIN AGE USING A ZKPROOF
        require(poolIdInfo[_poolId].privateVoteContract.isValidator(msg.sender), "Only validator can register validator!");
        ZKTreeVote pool = poolIdInfo[_poolId].privateVoteContract;
        pool.registerValidator(_validator);
    }

    function commitment(
        uint256 _poolId,
        uint256 _uniqueHash,
        uint256 _commitment
    ) external {
        require(poolIdInfo[_poolId].privateVoteContract.isValidator(msg.sender), "Only validator can commit!");
        ZKTreeVote pool = poolIdInfo[_poolId].privateVoteContract;
        pool.registerCommitment(_uniqueHash, _commitment);
    }

    function AllocateToRecipient(
        uint256 _poolId,
        address _recipient,
        uint256 _nullifier,
        uint256 _root,
        uint[2] memory _proof_a,
        uint[2][2] memory _proof_b,
        uint[2] memory _proof_c
    ) external {
        require(poolIdInfo[_poolId].votingEnds >= block.timestamp, "Only validator can vote!");

        ZKTreeVote pool = poolIdInfo[_poolId].privateVoteContract;

        pool.vote(
            _recipient,
            _nullifier,
            _root,
            _proof_a,
            _proof_b,
            _proof_c
        );
    }
// get WInner by getting for a pool id all the recipients and getting the one with the highest vote
    function setPoolWinner(uint256 _poolId) external {
        require(poolIdInfo[_poolId].votingEnds <= block.timestamp, "Voting is still ongoing!");
        EnumerableSet.Bytes32Set storage recipients = poolIdToRecipients[_poolId];
        ZKTreeVote pool = poolIdInfo[_poolId].privateVoteContract;
        uint256 maxVotes = 0;
        uint256 tempVotes;
        bytes32 winner;
        for (uint256 i = 0; i < recipients.length(); i++) {
            bytes32 recipientId = recipients.at(i);
            Recipient memory recipient = recipientInfo[recipientId];
            tempVotes = pool.getRecipientVotes(recipient.recipientAddress);
            if (tempVotes > maxVotes) {
                maxVotes = tempVotes;
                winner = recipientId;
            }
        }
        recipient = recipientInfo[winner];
        poolWinner[_poolId] = recipient;
        Allo.allocate(_poolId, abi.encode(recipient.recipientAddress, recipient.proposalBid));
    }

    function setMilestonesToStrategy(
        uint256 _poolId,
        Milestone[] memory _milestones
    ) external {
        Pool memory pool = poolIdInfo[_poolId];
        require(pool.ZKTreeVote.isValidator(msg.sender), "Only validator can set milestones!");
        IStrategy strategy = IStrategy(pool.strategy);
        strategy.setMilestones(_milestones);
    }


    function getPoolData(
        uint256 _poolId
    ) public view returns (Pool memory pool) {
        pool = poolIdInfo[_poolId];
    }

    function rejectMilestone(
        uint256 _poolId,
        uint256 _milestoneId
    ) external {
        Pool memory pool = getPoolData(_poolId);
        IStrategy strategy = IStrategy(pool.strategy);
        strategy.rejectMilestone(_milestoneId);
    }

    function increaseMaxBid(
        uint256 _poolId,
        uint256 _maxBid
    ) external {
        Pool memory pool = getPoolData(_poolId);
        IStrategy strategy = IStrategy(pool.strategy);
        strategy.increaseMaxBid(_maxBid);
    }

    function getProfileData(
        bytes32 _profileId
    ) external view returns (IRegistry.Profile memory profile) {
        profile = Registry.getProfileById(_profileId);
    }

    function getTime() public view returns (uint256) {
        return block.timestamp;
    }
}