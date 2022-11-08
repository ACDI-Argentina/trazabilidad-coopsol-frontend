import config from "../../config/index";
const name = config.NETWORK_NAME;
const explorer = config.NETWORK_EXPLORER;
const address = config.TRACEABILITY_REGISTRY_ADDRESS;
const lacchainTraceabilityAddress = config.LACCHAIN_TRACEABILITY_ADDRESS;
const LACCHAIN_NETWORK_EXPLORER = config.LACCHAIN_NETWORK_EXPLORER;

const GoerliContractInfo = ({ }) => {

    return (
        <div className="panel panel-default teal">
            <div className="panel-body">
                <div className="rw-container">
                    <p>
                        We store a hash of the data shown here in a smart contract on the <a href="#" target="_blank">{name}</a> network.
                        Once written, the data cannot be modified, which guarantees the <b>immutability</b> of the data.
                    </p>

                    <p> The smart contract is deployed at <a target="_blank" href={`${explorer}/address/${address}`}>{address}</a>.
                        You can check the source code of the contract <a target="_blank" href={`${explorer}/address/${address}#code`}>here</a>.</p>

                </div>
            </div>
        </div>
    );
}


const LacchainContractInfo = ({ }) => {
    const name = "LACChain";
    const blockchainHome = "https://www.lacchain.net/home";
    const contractOnExplorer = `${LACCHAIN_NETWORK_EXPLORER}/address/${address}`;

    return (
        <div className="panel panel-default teal">
            <div className="panel-body">
                <div className="rw-container">
                    <p>
                        We store a hash of the data shown here in a smart contract on the <a href={blockchainHome} target="_blank">{name}</a> network.
                        Once written, the data cannot be modified, which guarantees the <b>immutability</b> of the data.
                    </p>

                    <p> The smart contract is deployed at <a target="_blank" href={contractOnExplorer}>{lacchainTraceabilityAddress}</a>.
                        {/* You can check the source code of the contract <a target="_blank" href={`${explorer}/address/${address}#code`}>here</a>. */}
                        </p>

                </div>
            </div>
        </div>
    );
}





const ContractInfo = ({ }) => {

    return (
        <>
            {name == "Goerli" && (<GoerliContractInfo />)}
            {name == "LACChain" && (<LacchainContractInfo />)}
            
        </>
    );
}

export default ContractInfo;