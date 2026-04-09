# Teaching Notes

## Core flow

1. User hits a certain requirement
2. Backend verifies the requirement
3. Backend uses owner/minter private key
4. Contract mints NFT badge to the user wallet

## Roles

- user wallet = receives the NFT
- owner/minter wallet = allowed to mint
- contract = enforces the mint rule

## Example badge levels

- LV1 = beginner milestone
- LV2 = stronger milestone
- LV3 = advanced / winner / premium milestone

## Important rule

Never expose the owner/minter private key in frontend code.
Keep it only in backend `.env`.

## Production upgrades later

- prevent duplicate mints
- add auth
- store mint history in DB
- use MINTER_ROLE
- add real metadata and images
