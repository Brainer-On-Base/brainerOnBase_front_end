require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    baseTestnet: {
      url: "https://sepolia.base.org", // RPC URL para la red de pruebas de Base
      accounts: [process.env.PRIVATE_KEY], 
    },
    baseMainnet: {
      url: "https://mainnet.base.org", // RPC URL para la mainnet de Base
      accounts: [process.env.PRIVATE_KEY], 
    },
  },
};
