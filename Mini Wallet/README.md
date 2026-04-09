# Mini Wallet

A simple DCAI L3 mini wallet example.

## Features

- connect wallet
- switch to DCAI L3
- refresh wallet address and native token balance
- send native token to another wallet

## What this sample uses

- frontend only
- `window.ethereum`
- MetaMask / EVM-compatible wallet
- DCAI L3 chain settings

## DCAI L3 network

- Chain ID: `18441`
- Hex Chain ID: `0x4809`
- Network Name: `DCAI L3 Testnet`
- Native Token Symbol: `tDCAI`
- RPC URL: `http://139.180.188.61:8545`
- Explorer: `http://139.180.140.143/`

## How to use

Open `index.html` in a browser with MetaMask installed.

Then:
1. connect wallet
2. switch to DCAI L3
3. click refresh balance
4. enter recipient address
5. enter amount
6. send token

## Notes

This sample sends the native gas token on DCAI L3, not ERC-20 tokens.
If you want, a later version can add ERC-20 balance + transfer too.
