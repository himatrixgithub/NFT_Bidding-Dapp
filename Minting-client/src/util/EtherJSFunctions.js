import { ethers } from "ethers";
import abi from "../abi.json";

export async function connectToWallet() {
  // Paste Step 5 code here
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  return provider.getSigner();
}

export async function getContract(signer) {
  // Paste Step 6 code here
  const contractAddress = "0xF0c75654c68FE44fE639f1419F126Ff4aD4E5e2F";
  return new ethers.Contract(contractAddress, abi, signer);
}

export async function mintNFT(stringURI, contract) {
  // Paste Step 7 code here
  const tx = await contract.mint(stringURI);
  console.log("transaction:>> ", tx);
  await tx.wait();
  return tx;
}

export function configureTokenURI(imageURL, name, description) {
  return JSON.stringify({
    name,
    description,
    image: imageURL,
    attributes: [],
  });
}
