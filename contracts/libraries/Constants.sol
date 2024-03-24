// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.19;

import {IAllo} from "../interfaces/IAllo.sol";
import {IAnchor} from "../interfaces/IAnchor.sol";
import {IRegistry} from "../interfaces/IRegistry.sol";

abstract contract Constants {
    // RFP Commitee Strategy address
    address strategy_implementation = 0x8Def91f220f3D1C16D406097ffb0dAEe0732772f;

    address constant NATIVE = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;
    
    uint256 internal levels = 20;

    // Allo contract interface
    IAllo public Allo;
    // Anchor contract interface
    IAnchor public Anchor;
    // Registry contract interface
    IRegistry public Registry;
    // Profile ID
    bytes32 public profileId;

    address[] _members;

    address private hasher;

    address private verifier;
}


