require("dotenv").config();
const express = require("express");
const { ethers } = require("ethers");

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT || 3000);
const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const ABI = [
  "function mintBadge(address to, uint8 level) external returns (uint256)"
];

function getContract() {
  if (!RPC_URL || !PRIVATE_KEY || !CONTRACT_ADDRESS) {
    throw new Error("Missing RPC_URL, PRIVATE_KEY, or CONTRACT_ADDRESS in .env");
  }

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);
}

app.get("/health", (req, res) => {
  res.json({ ok: true, chainId: 18441, name: "NFT badge example" });
});

app.post("/mint-badge", async (req, res) => {
  try {
    const { walletAddress, level, completedTask } = req.body;

    if (!ethers.isAddress(walletAddress)) {
      return res.status(400).json({ ok: false, error: "Invalid wallet address" });
    }

    if (![1, 2, 3].includes(Number(level))) {
      return res.status(400).json({ ok: false, error: "Level must be 1, 2, or 3" });
    }

    if (!completedTask) {
      return res.status(403).json({ ok: false, error: "User has not met requirement" });
    }

    const contract = getContract();
    const tx = await contract.mintBadge(walletAddress, Number(level));
    const receipt = await tx.wait();

    res.json({
      ok: true,
      walletAddress,
      level: Number(level),
      txHash: tx.hash,
      blockNumber: receipt.blockNumber
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err && err.message ? err.message : "Mint failed"
    });
  }
});

app.listen(PORT, () => {
  console.log(`NFT badge backend running on http://localhost:${PORT}`);
});
