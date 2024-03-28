// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.20;

abstract contract Constants {
    // RFP Commitee Strategy address
    address strategy_implementation = 0x8Def91f220f3D1C16D406097ffb0dAEe0732772f;

    address constant NATIVE = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;
    
    address[] _members;

    /// @notice The Status enum that all recipients are based from
    enum Status {
        None,
        Pending,
        Accepted,
        Rejected,
        Appealed,
        InReview,
        Canceled
    }
}


