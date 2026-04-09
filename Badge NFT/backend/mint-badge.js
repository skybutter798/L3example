const { ethers } = require("ethers");

const RPC_URL = "http://139.180.140.143/rpc/basic/YOUR_API_KEY/";
const PRIVATE_KEY = "YOUR_OWNER_PRIVATE_KEY";
const CONTRACT_ADDRESS = "YOUR_BADGE_CONTRACT_ADDRESS";

const ABI = [
  "function mintBadge(address to, uint8 level) external returns (uint256)"
];

async function mintBadge(to, level) {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

  const tx = await contract.mintBadge(to, level);
  console.log("Tx sent:", tx.hash);

  const receipt = await tx.wait();
  console.log("Tx confirmed in block:", receipt.blockNumber);

  return {
    txHash: tx.hash,
    blockNumber: receipt.blockNumber
  };
}

mintBadge("0xUserWalletAddressHere", 1)
  .then(console.log)
  .catch(console.error);
