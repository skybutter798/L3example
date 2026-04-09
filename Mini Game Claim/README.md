# Mini Game Claim

A simple student-friendly DCAI L3 example:

- connect wallet
- play a tiny click game
- earn points
- click **Claim on Chain**
- write the claim record to DCAI L3

## Why this sample is good for students

It combines:
- frontend interaction
- wallet connection
- smart contract write
- visible on-chain result

## Flow

1. connect wallet
2. switch to DCAI L3
3. play the click game for 10 seconds
4. score points
5. click **Claim on Chain**
6. wallet sends transaction to the contract
7. contract stores the claimed points

## DCAI L3 network

- Chain ID: `18441`
- Hex Chain ID: `0x4809`
- Network Name: `DCAI L3 Testnet`
- Native Token Symbol: `tDCAI`
- RPC URL: `http://139.180.188.61:8545`
- Explorer: `http://139.180.140.143/`

## Files

- `index.html` — mini game + wallet UI
- `contracts/PointsClaim.sol` — simple points claim contract

## Important note

This sample is intentionally simple.
The score is tracked in the frontend, so it is not anti-cheat secure.
For production, score validation should be verified by a backend or signed system.
