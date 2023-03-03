import { GasModelProvider, GasModelSigner } from "@lacchain/gas-model-provider";
import { Contract } from "ethers";
import Traceability from "../artifacts/Traceability_metadata.json";
import config from "../config";

const {
    LACCHAIN_NETWORK_URL,
    LACCHAIN_TRACEABILITY_ADDRESS
} = config;

const providerLacchain = new GasModelProvider(LACCHAIN_NETWORK_URL);
const abi = Traceability.output.abi;
const contract = new Contract(LACCHAIN_TRACEABILITY_ADDRESS,abi,providerLacchain);

console.log(`Initialize smart contract connected to lacchain at address ${LACCHAIN_TRACEABILITY_ADDRESS}`);
export default contract; 


export const getHash = async (traceId) => {
    if(!contract){
        throw new Error("Cannot call contract");
    }
    const hash = await contract.hashes(traceId);
    console.log(`Hash retrieved from smart contract: ${hash}`);


    return hash;
}


