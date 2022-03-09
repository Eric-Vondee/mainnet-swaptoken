import { Signer } from "ethers";
import { ethers, network } from "hardhat";
import {WETH_CONTRACT_ADDRESS, USDT_CONTRACT_ADDRESS, UNISWAP_CONTRACT_ADDRESS, USDT_HOLDER_ADDRESS, UNISWAP_ROUTER_ADDRESS} from '../config/index';


async function swap() {
    const usdtContractAddress:string = USDT_CONTRACT_ADDRESS;
    const uniswapContractAddress: string = UNISWAP_CONTRACT_ADDRESS;
    const uniswapRouterAddress:string = UNISWAP_ROUTER_ADDRESS;
    const usdtHolderAddress:string = USDT_HOLDER_ADDRESS;
    const amountIn = 10000e6;

    //granting usdt address the ability to sign transactions 
    const usdtSigner:Signer = await ethers.getSigner(usdtHolderAddress);

    //granting the uniswap router address the ability to sign transactions 
    const router = await ethers.getContractAt("IRouter", uniswapRouterAddress, usdtSigner);

    const usdtContract = await ethers.getContractAt("IERC20", usdtContractAddress, usdtSigner);
    const uniSwapContract = await ethers.getContractAt("IERC20", uniswapContractAddress);

    console.log(`balance before: ${await uniSwapContract.balanceOf(usdtHolderAddress)}`)

    //set usdt balance 
    await network.provider.send('hardhat_setBalance', [
        usdtHolderAddress,
        '0x1000000000000000000000000000'
    ])
    console.log(`balance before: ${await usdtContract.balanceOf(usdtHolderAddress)}`)

      //@ts-ignore
    await hre.network.provider.request({
        method: 'hardhat_impersonateAccount',
        params: [usdtHolderAddress],
    })

    console.log(`approving ${router} to spend ${amountIn}`)
    await usdtContract.approve(uniswapRouterAddress, amountIn);

    console.log(`Swapping ${amountIn} USDT`)

    await router.swapExactTokensForTokens(
        amountIn,
        0, 
        [usdtContractAddress, WETH_CONTRACT_ADDRESS, uniswapContractAddress],
        usdtHolderAddress,
        1646908001
    )

    console.log(`Balance now is ${await uniSwapContract.balanceOf(usdtHolderAddress)}`)

}

swap().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })