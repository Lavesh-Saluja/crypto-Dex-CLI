# Crypto CLI

A simple and powerful Node.js CLI tool to manage API keys and check cryptocurrency prices.

## Installation

Install the package globally using npm:

```bash
npm install -g crypto-cli

#Manage API Key
## Set API Key
crypto-cli key set

## Show API Key
crypto-cli key show

## Remove API Key
crypto-cli key remove

# Check Coin Price Info
crypto-cli check price --coin BTC,ETH,XRP --cur USD
### options
--coin <type>: Specify cryptocurrency types in CSV format (default: BTC,ETH,XRP).
--cur <currency>: Choose the currency for prices (default: USD).
