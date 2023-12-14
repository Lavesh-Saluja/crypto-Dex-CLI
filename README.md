# Crypto CLI

A simple and powerful Node.js CLI tool to manage API keys and check cryptocurrency prices.

## Installation

Install the package globally using npm:

npm install -g crypto-cli

# Manage API Key
## Set API Key
coindex key set

## Show API Key
coindex key show

## Remove API Key
coindex key remove

# Check Coin Price Info
coindex check price --coin BTC,ETH,XRP --cur USD
### options
--coin <type>: Specify cryptocurrency types in respected Symbols (default: BTC,ETH,XRP).
--cur <currency>: Choose the currency for prices using respected Notations(Eg: INR) (default: USD).

