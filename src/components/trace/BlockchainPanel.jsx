import config from "../../config/index";
import checkSrc from "../../assets/imgs/check.png";

const name = config.NETWORK_NAME;
const explorer = config.NETWORK_EXPLORER;
const address = config.TRACEABILITY_REGISTRY_ADDRESS;

const BlockchainPanel = ({ verified, hash }) => {
    console.log(hash)
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
                    {/* Add loading indicator */}
                    {verified && (
                        <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
                            <img className="icon-img" src={checkSrc} alt="Verified" />
                            <p className="trace-hash-container"><b>VERIFIED</b>. Trace hash: <span className="trace-hash">{hash}</span></p>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}


export default BlockchainPanel;