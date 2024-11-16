import { Wallet } from "ethers";

function generateWallet(): void {
    // Generate a random Ethereum wallet
    const wallet = Wallet.createRandom();

    // Extract the private key and address
    const privateKey = wallet.privateKey; // Keep this secure
    const address = wallet.address; // This can be shared

    console.log("Generated Wallet:");
    console.log("Private Key:", privateKey);
    console.log("Address:", address);
}

// Execute the function to generate a wallet
generateWallet();
