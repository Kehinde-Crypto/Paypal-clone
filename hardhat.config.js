require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan")
require('dotenv').config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    zkSyncMainnet:{
    url:process.env.ZKSYNC_MAINNET,
    ethNetwork:"mainnet",
    zksync:true,
    accounts:[PRIVATE_KEY],
   }
  },
  etherscan:{
    apiKey: process.env.API_KEY,
  }
};
