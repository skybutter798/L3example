// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract OnchainVoting {
    string[3] public optionNames = ["Option A", "Option B", "Option C"];
    uint256[3] public voteCounts;
    mapping(address => bool) public hasVoted;

    event Voted(address indexed voter, uint8 indexed optionIndex, uint256 newVoteCount);

    function vote(uint8 optionIndex) external {
        require(!hasVoted[msg.sender], "You have already voted");
        require(optionIndex < 3, "Invalid option");

        hasVoted[msg.sender] = true;
        voteCounts[optionIndex] += 1;

        emit Voted(msg.sender, optionIndex, voteCounts[optionIndex]);
    }

    function getVoteCounts() external view returns (uint256[3] memory) {
        return voteCounts;
    }
}
