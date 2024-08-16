# ERC20 Sepolia to amoy Bridge Using fxPortal
This project demonstrates how to use the fxPortal contracts to transfer ERC20 tokens from sepolia to amoy.

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network sepolia to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network sepolia to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network sepolia to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. yarn add --dev hardhat @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers // run to install ethers npm hardhat
10. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
11. Use this polygon contract address for your getBalance script's tokenAddress
12. Run npx hardhat run scripts/getBalance.js --network amoy to see the new polygon balances
## author
Aman Patel
