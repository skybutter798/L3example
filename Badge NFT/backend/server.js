const express = require("express");
const { ethers } = require("ethers");

const app = express();
app.use(express.json());

const RPC_URL = "http://139.180.140.143/rpc/basic/YOUR_API_KEY/";
const PRIVATE_KEY = "YOUR_OWNER_PRIVATE_KEY";
const CONTRACT_ADDRESS = "YOUR_BADGE_CONTRACT_ADDRESS";

const ABI = [
  "function mintBadge(address to, uint8 level) external returns (uint256)"
];

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

app.post("/mint-badge", async (req, res) => {
  try {
    const { walletAddress, level, completedTask } = req.body;

    if (!ethers.isAddress(walletAddress)) {
      return res.status(400).json({ ok: false, error: "Invalid wallet address" });
    }

    if (![1, 2, 3].includes(level)) {
      return res.status(400).json({ ok: false, error: "Invalid level" });
    }

    if (!completedTask) {
      return res.status(403).json({ ok: false, error: "User has not met requirement" });
    }

    const tx = await contract.mintBadge(walletAddress, level);
    const receipt = await tx.wait();

    res.json({
      ok: true,
      txHash: tx.hash,
      blockNumber: receipt.blockNumber
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err.message || "Mint failed"
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
