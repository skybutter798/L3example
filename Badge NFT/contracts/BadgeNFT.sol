// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BadgeNFT is ERC721, Ownable {
    uint256 public nextTokenId;
    mapping(uint256 => uint8) public badgeLevel;

    event BadgeMinted(address indexed to, uint256 indexed tokenId, uint8 level);

    constructor(address initialOwner) ERC721("DCAI Badge", "DBADGE") Ownable(initialOwner) {}

    function mintBadge(address to, uint8 level) external onlyOwner returns (uint256) {
        require(to != address(0), "Invalid address");
        require(level >= 1 && level <= 3, "Invalid level");

        uint256 tokenId = nextTokenId;
        nextTokenId++;

        _safeMint(to, tokenId);
        badgeLevel[tokenId] = level;

        emit BadgeMinted(to, tokenId, level);

        return tokenId;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(ownerOf(tokenId) != address(0), "Token does not exist");

        uint8 level = badgeLevel[tokenId];

        if (level == 1) {
            return "https://your-domain.com/metadata/lv1.json";
        } else if (level == 2) {
            return "https://your-domain.com/metadata/lv2.json";
        } else {
            return "https://your-domain.com/metadata/lv3.json";
        }
    }
}
