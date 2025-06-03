## Unit 3: Ethereum | Deploy a Token Standard -English Version- 🚀

### What's this project about?

This project demonstrates how to deploy your own ERC20 token using the OpenZeppelin library. The token is deployed on the Sepolia testnet, and you can interact with it using scripts and MetaMask. The project is designed for learning and experimentation with Ethereum token standards.

---

### Why ERC20?

As a newbie in the world of blockchain, I choose ERC20 because it's the most basic and widely used token standard on Ethereum. It's a good starting point to understand how tokens work on Ethereum.

### Deployment Details

- **Token Name:** AbToken
- **Symbol:** ABT
- **Decimals:** 18
- **Initial Supply:** 1,000,000 ABT
- **Deployed to Sepolia:** [View on Etherscan](https://sepolia.etherscan.io/token/0xAc77184d1Ee3b4D22f4BcF4490856905c397D1F8)
- **Contract Address:** `0xAc77184d1Ee3b4D22f4BcF4490856905c397D1F8`

---

### Getting Started

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Compile Contracts
```bash
npx hardhat compile
```

#### 3. Deploy to Sepolia (using Hardhat Ignition)
- Configure your `.env` file with your Sepolia RPC URL and private key:
  ```env
  SEPOLIA_RPC_URL=YOUR_SEPOLIA_RPC_URL
  PRIVATE_KEY=YOUR_PRIVATE_KEY
  ```
- Deploy:
  ```bash
  npx hardhat ignition deploy ./ignition/modules/AbToken.ts --network sepolia
  ```

#### 4. Run the Token Transfer Script
- Edit `scripts/transfer-abtoken.ts` and set the recipient address.
- Run:
  ```bash
  npx hardhat run scripts/transfer-abtoken.ts --network sepolia
  ```