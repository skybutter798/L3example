# Badge NFT

A simple teaching example for minting **NFT badges** on **DCAI L3**.

## What this teaches

- how to build a simple **ERC-721** badge contract
- how a **backend** can mint a badge for a user
- how to use an **owner/minter private key** safely on the backend
- how to structure a beginner-friendly sample repo for students

## Basic flow

1. User reaches a certain requirement
2. Backend verifies the requirement
3. Backend uses the owner/minter wallet
4. Contract mints an NFT badge to the user's wallet

Example badge levels:
- `LV1`
- `LV2`
- `LV3`

## Folder structure

- `contracts/BadgeNFT.sol`
- `scripts/deploy.js`
- `backend/server.js`
- `frontend/index.html`
- `.env.example`
- `package.json`

## Quick start

```bash
npm install
cp .env.example .env
# fill in RPC_URL, PRIVATE_KEY, CONTRACT_ADDRESS
npm run dev
```

Then open `frontend/index.html` and test the backend flow.

## Important warning

Never put the owner private key in frontend code.
Keep it only in `.env` on the backend.
