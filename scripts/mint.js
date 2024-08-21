// Script for Batch Mint

// Import required libraries
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get private key from env
  const privateKey = "3f7537940d0d1c2e21b0d7bd5496404b5d2b1c244df79404dd4933734d339673";

  // The URL of the network provider
  const networkAddress = "https://ethereum-sepolia.blockpi.network/v1/rpc/public";

  // Create a provider using the URL
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer from the private key and provider
  const signer = new ethers.Wallet(privateKey, provider);

  // Tthe address of the deployed contract
  const contractAddress = "0x97A169DB467A3a5ebcCd259197ed7DF374220102";

  // Get the contract factory and attach it to the signer
  const NFT = await ethers.getContractFactory("MetaToken", signer);
  const contract = await NFT.attach(contractAddress);

  // Call the mint function on the contract to mint 5 tokens
  await contract.mint(5);

  // Log a message to the console to indicate that the tokens have been minted
  console.log("Your 5 tokens are successfully minted.");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
