require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan")
const dotenv = require("@nomiclabs/dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks:{
   mumbai:{
    url:process.env.POLYGON_MUMBAI ,
    accounts:[process.env.POLYGON_KEY],
   }
  },
  etherscan:{
    apiKey: process.env.API_KEY,
  }
};
