const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying with:", deployer.address);

  const BadgeNFT = await ethers.getContractFactory("BadgeNFT");
  const contract = await BadgeNFT.deploy(deployer.address);

  await contract.waitForDeployment();

  console.log("BadgeNFT deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
