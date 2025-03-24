# HyperSwap 🚀  

HyperSwap is a simple yet powerful token-swapping app powered by the [Jupiter API](https://www.jup.ag/) on Solana. This project is designed for learning how optimal token swaps occur across various liquidity pools, helping developers and traders understand how decentralized exchanges (DEXs) find the best swap routes.

## 📌 Features  

- **Optimized Token Swapping** – Leverages Jupiter’s smart routing algorithm to find the best price.  
- **Multi-Pool Liquidity** – Routes swaps through different decentralized exchanges (DEXs) and liquidity pools.  
- **Educational Purpose** – Designed to help users and developers understand the mechanics behind token swapping.  
- **Seamless Integration** – Uses Jupiter’s API for real-time swap execution.  

## 🔍 How Does Jupiter API Find the Best Swap Route?  

Jupiter is one of the most advanced DEX aggregators on Solana. It determines the best token swap route by:  

1. **Scanning Multiple Liquidity Pools** – It aggregates liquidity from various DEXs like Orca, Raydium, Serum, and more.  
2. **Splitting Orders for Better Pricing** – If a single pool doesn’t offer the best price, Jupiter splits the trade across multiple pools.  
3. **Slippage & Fee Optimization** – The API calculates slippage, fees, and token prices in real time to ensure minimal loss.  
4. **Pathfinding Algorithm** – Jupiter uses a pathfinding algorithm to determine the most cost-efficient route for swapping.  

## 🚀 Getting Started  

### Prerequisites  
- Node.js installed  
- A Solana wallet (e.g., Phantom)  
- API access to Jupiter  

### Installation  

1. Clone this repository:  
   ```sh
   git clone https://github.com/yourusername/hyperswap.git
   cd hyperswap
