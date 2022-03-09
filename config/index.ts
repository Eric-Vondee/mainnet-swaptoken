import * as dotenv from "dotenv";
dotenv.config(); 

export const USDT_CONTRACT_ADDRESS = process.env.USDT_CONTRACT_ADDRESS || '';
export const UNISWAP_CONTRACT_ADDRESS = process.env.UNISWAP_CONTRACT_ADDRESS || '';
export const USDT_HOLDER_ADDRESS = process.env.USDT_HOLDER_ADDRESS || '';
export const UNISWAP_ROUTER_ADDRESS = process.env.UNISWAP_ROUTER_ADDRESS || '';

