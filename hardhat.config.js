require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
 networks: {
    amoy: {
      url: 'https://polygon-amoy.gateway.tatum.io',
      accounts: ["11b0c9de64ab65df435387c8f2e2873d72cd7b719a4df372b6523a3079d363cc"],
    },
    sepolia: {
      url: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
      accounts: ["3f7537940d0d1c2e21b0d7bd5496404b5d2b1c244df79404dd4933734d339673"],
    },
    
  }
};
