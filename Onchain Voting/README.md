# Onchain Voting

A simple DCAI L3 voting example:

- connect wallet
- switch to DCAI L3
- choose a voting option
- submit vote on-chain
- read live vote counts from the contract

## Flow

1. connect wallet
2. switch to DCAI L3
3. enter contract address
4. choose an option
5. click **Vote On Chain**
6. wallet sends transaction and pays gas
7. contract stores the vote
8. UI refreshes live vote counts

## DCAI L3 network

- Chain ID: `18441`
- Hex Chain ID: `0x4809`
- Network Name: `DCAI L3 Testnet`
- Native Token Symbol: `tDCAI`
- RPC URL: `http://139.180.188.61:8545`
- Explorer: `http://139.180.140.143/`

## Files

- `index.html` — wallet + voting UI
- `contracts/OnchainVoting.sol` — simple voting contract

## Notes

This version uses 3 fixed options and lets each wallet vote once.
