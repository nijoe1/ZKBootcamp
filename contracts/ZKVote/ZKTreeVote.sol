// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "zk-merkle-tree/contracts/ZKTree.sol";

contract ZKTreeVote is ZKTree {
    address public owner;

    mapping(address => bool) public validators;

    mapping(uint256 => bool) uniqueHashes;

    mapping(address => uint) optionCounter;

    constructor(
        uint32 _levels,
        address _hasher,
        address _verifier,
        address[] memory _validators
    ) ZKTree(_levels, IHasher(_hasher), IVerifier(_verifier)) {
        for (uint i = 0; i < _validators.length; i++) {
            validators[_validators[i]] = true;
        }
        owner = msg.sender;
    }

    function registerValidator(address _validator) external {
        // TODO PROVE THE RECIPIENT IS ABOVE A CERTAIN AGE USING ZKPROOF

        validators[_validator] = true;
    }

    function registerCommitment(
        uint256 _uniqueHash,
        uint256 _commitment
    ) external {
        require(validators[msg.sender], "Only validator can commit!");
        require(
            !uniqueHashes[_uniqueHash],
            "This unique hash is already used!"
        );
        _commit(bytes32(_commitment));
        uniqueHashes[_uniqueHash] = true;
    }

    function vote(
        address _option,
        uint256 _nullifier,
        uint256 _root,
        uint[2] memory _proof_a,
        uint[2][2] memory _proof_b,
        uint[2] memory _proof_c
    ) external {
        _nullify(
            bytes32(_nullifier),
            bytes32(_root),
            _proof_a,
            _proof_b,
            _proof_c
        );
        optionCounter[_option] = optionCounter[_option] + 1;
    }

    function getRecipientVotes(address _option) external view returns (uint) {
        return optionCounter[_option];
    }

    function isValidator(address _validator) external view returns (bool) {
        return validators[_validator];
    }
}
