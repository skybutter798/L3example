// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract OnchainCalculator {
    struct CalculationRecord {
        address user;
        int256 a;
        string operator;
        int256 b;
        int256 result;
        uint256 timestamp;
    }

    CalculationRecord[] public records;

    event CalculationSubmitted(
        address indexed user,
        int256 a,
        string operator,
        int256 b,
        int256 result,
        uint256 recordId
    );

    function submitCalculation(
        int256 a,
        string calldata operator,
        int256 b,
        int256 result
    ) external {
        records.push(CalculationRecord({
            user: msg.sender,
            a: a,
            operator: operator,
            b: b,
            result: result,
            timestamp: block.timestamp
        }));

        emit CalculationSubmitted(msg.sender, a, operator, b, result, records.length - 1);
    }

    function getRecordCount() external view returns (uint256) {
        return records.length;
    }

    function getRecord(uint256 index) external view returns (
        address user,
        int256 valueA,
        string memory op,
        int256 valueB,
        int256 valueResult,
        uint256 timestamp
    ) {
        CalculationRecord memory r = records[index];
        return (r.user, r.a, r.operator, r.b, r.result, r.timestamp);
    }
}
