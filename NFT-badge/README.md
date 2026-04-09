# NFT Badge Example

A simple teaching example for minting **NFT badges** on **DCAI L3**.

## Goal

When a user meets a requirement in your app:

1. your backend verifies the requirement
2. your backend uses the **owner/minter private key**
3. your backend calls the NFT contract
4. the contract mints a badge NFT to the user's wallet

Example badge levels:

- `LV1`
- `LV2`
- `LV3`

## Project structure

- `contracts/BadgeNFT.sol` — simple ERC-721 badge contract
- `backend/server.js` — backend API that mints the badge
- `frontend/index.html` — tiny demo page
- `.env.example` — config template
- `package.json` — dependencies and scripts

## Why backend minting?

Because the project controls badge issuance.

- **user wallet** = receives the badge
- **owner/minter wallet** = has permission to mint
- **contract** = enforces the rule with `onlyOwner`

## Quick start

```bash
npm install
cp .env.example .env
# fill in your values
npm run dev
```

Then open `frontend/index.html` and test minting.

## DCAI L3 notes

- Chain ID: `18441`
- Example RPC style:

```txt
http://139.180.140.143/rpc/basic/YOUR_API_KEY/
```

## Important warning

Never put the owner/minter private key in frontend code.
Keep it on the backend only.

## Good next upgrades

- prevent duplicate mints
- use `MINTER_ROLE` instead of only owner
- store mint history in a database
- use real metadata and NFT images
- add auth to the backend API
