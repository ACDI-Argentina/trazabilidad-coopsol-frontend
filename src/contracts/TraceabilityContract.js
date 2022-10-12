import Web3 from "web3";
import Traceability from "../artifacts/Traceability_metadata.json";
import config from "../config";

const {
    TRACEABILITY_REGISTRY_ADDRESS,
    NETWORK_URL
} = config;

const provider = new Web3.providers.HttpProvider(NETWORK_URL);
const web3 = new Web3(provider);
const abi = Traceability.output.abi;
const contract = new web3.eth.Contract(abi, TRACEABILITY_REGISTRY_ADDRESS);

export default contract;

export const getHash = async (key) => {
    return await contract.methods.hashes(key).call();
}
