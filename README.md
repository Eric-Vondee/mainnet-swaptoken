# Hardhat - Mainnet Forking & Account Impersonation & Swapping Token using UNISWAP

This project demonstrates an advanced use of Hardhat. 
We want to be able to perform the following actions.

- Etherum Mainnet Forking.
- Interact with Usdt and Uniswap token.
- Get Uniswap v2 router.
- Perfom an account impersonation with the usdt holder address. 
- Set the address balance using hardhat internal function.
- Approve uniswap v2 router to swap tokens.

Test this  contract by running these following tasks:

yarn hardhat compile
yarn hardhat run scripts/deploy.ts


## Environment Variables 
check `.env.example`
- `ETHMAINNET_URL`
- `PRIVATE_KEY`
- `UNISWAP_CONTRACT_ADDRESS`
- `USDT_HOLDER_ADDRESS`
- `UNISWAP_ROUTER_ADDRESS`
- `WETH_CONTRACT_ADDRESS`