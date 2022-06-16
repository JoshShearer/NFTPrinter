# NFT Printer

## Overview
A Web 3 NFT printer with API access to verify unique token names

## Build Stack
 * Nextjs + Typescript
 * Redux/Rematch
 * Solidity
 * TailwindUI
 * Metamask (Dev)
 * Ganache (Dev)

 * Currently hosted on heroku @ [NFTPrinter](https://NFTPrinter.herokuapp.com/)
 * The components will not load unless Metamask is successfully connected to the page with funded accounts

## Dev Requirements
You will need to have Ganache installed and running in the background.  In the browser Metamask is connected to your ganache ETH accounts.  Truffle also needs to be installed in order to get started.
## Getting Started
Compile the smart contracts:
```bash
truffle migrate
```
Seed the exchange with some trades/transactions:
```bash
truffle web3-eth/scripts/seed-exchange.js
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.




## Components
### Search
Search for information on existing NFT's
### Create
Create your NFT
### Print  
Pring your NFT