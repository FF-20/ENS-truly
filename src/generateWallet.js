"use strict";
exports.__esModule = true;
var ethers_1 = require("ethers");
function generateWallet() {
    // Generate a random Ethereum wallet
    var wallet = ethers_1.Wallet.createRandom();
    // Extract the private key and address
    var privateKey = wallet.privateKey; // Keep this secure
    var address = wallet.address; // This can be shared
    console.log("Generated Wallet:");
    console.log("Private Key:", privateKey);
    console.log("Address:", address);
}
// Execute the function to generate a wallet
generateWallet();
