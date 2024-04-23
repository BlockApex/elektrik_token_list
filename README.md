# elektrik_token_list

# How to Add and Deploy a New Token to the IPFS Token List

## Overview

This README guide provides detailed instructions on how to add a new token to the Ethereum-based token lists for testnet and mainnet (Pegasus and Phoenix, respectively) and deploy these updated lists to IPFS using Node.js.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your computer.
- **File Access**: You should have access to `token_testnet.json` for the testnet or `token.json` for the mainnet.
- **API Key**: A valid Pinata API key is required for IPFS deployment.

## Project Structure

- `token_testnet.json`: Contains the token list for the Pegasus testnet.
- `token.json`: Contains the token list for the Phoenix mainnet.
- `index.js`: Node.js script to deploy the token lists to IPFS.

## Adding a New Token

### Step 1: Update the Token List

1. **Select the Correct List**:
   - Use `token_testnet.json` for Pegasus Testnet.
   - Use `token.json` for Phoenix Mainnet.

2. **Add Token Details**:
   - Edit the chosen JSON file and append your token information in the following format within the `tokens` array:

   ```json
   {
      "chainId": 1891,
      "address": "0xYOUR_TOKEN_ADDRESS",
      "name": "YOUR_TOKEN_NAME",
      "symbol": "YOUR_TOKEN_SYMBOL",
      "decimals": TOKEN_DECIMALS,
      "logoURI": "URL_TO_TOKEN_LOGO"
   }
   ```

   Replace `YOUR_TOKEN_ADDRESS`, `YOUR_TOKEN_NAME`, `YOUR_TOKEN_SYMBOL`, `TOKEN_DECIMALS`, and `URL_TO_TOKEN_LOGO` with your token's specific details.

### Step 2: Save Your Changes

Ensure that you save the updated JSON file after adding your new token.

## Deploying the Token List to IPFS

### Step 1: Set Up Your Deployment Script

1. **Modify the Node.js Script**:
   - Open your `index.js` script.
   - Set the `src` variable to the path of the JSON file you want to deploy. For mainnet, it should point to `token.json`, and for testnet to `token_testnet.json`.

2. **Deploy to IPFS**:
   - Run the following command in your terminal to execute the script and deploy your token list to IPFS:

   ```bash
   node index.js
   ```

3. **Check the Output**:
   - The script will output an IPFS link (CID). This link can be used to access the updated token list.

## Conclusion

By following these steps, you can easily add a new token to the respective Ethereum token list and deploy it to IPFS, ensuring it's accessible for integration into decentralized exchanges and other platforms.