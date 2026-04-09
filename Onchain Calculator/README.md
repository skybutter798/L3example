# Onchain Calculator

A simple DCAI L3 example:

- connect wallet
- switch to DCAI L3
- enter numbers in a calculator UI
- do `+ - × /`
- submit the calculation record to chain

## Flow

1. connect wallet
2. switch to DCAI L3
3. enter first number
4. choose operator
5. enter second number
6. calculate result in the UI
7. click **Submit Record On Chain**
8. wallet sends transaction and pays gas
9. contract stores the calculation record

## DCAI L3 network

- Chain ID: `18441`
- Hex Chain ID: `0x4809`
- Network Name: `DCAI L3 Testnet`
- Native Token Symbol: `tDCAI`
- RPC URL: `http://139.180.188.61:8545`
- Explorer: `http://139.180.140.143/`

## Files

- `index.html` — calculator UI + wallet flow
- `contracts/OnchainCalculator.sol` — contract that stores calculation records

## Notes

This sample stores a simple calculation result on-chain.
The user pays gas when submitting the record.
