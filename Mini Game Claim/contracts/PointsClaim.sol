// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PointsClaim {
    mapping(address => uint256) public totalClaimedPoints;
    mapping(address => uint256) public claimCount;

    event PointsClaimed(address indexed user, uint256 amount, uint256 totalAfterClaim);

    function claimPoints(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");

        totalClaimedPoints[msg.sender] += amount;
        claimCount[msg.sender] += 1;

        emit PointsClaimed(msg.sender, amount, totalClaimedPoints[msg.sender]);
    }
}
