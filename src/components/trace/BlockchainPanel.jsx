import config from "../../config/index";
import checkSrc from "../../assets/imgs/check.png";
import Dots from "../ui/dots";
import { useState } from "react";

const name = config.NETWORK_NAME;
const explorer = config.NETWORK_EXPLORER;
const address = config.TRACEABILITY_REGISTRY_ADDRESS;



const BlockchainPanel = ({ verifying, expectedHash, actualHash }) => {
    const verified = actualHash && expectedHash === actualHash;

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


                    <div>
                        {verifying && (
                            <div style={{ display: "flex", alignItems: "center" }} className="scale-up-ver-top">
                                <div className='spinner'></div>
                                Verifying&nbsp;
                                <Dots />
                            </div>
                        )}

                        {expectedHash && (
                            <div className="hash-container scale-up-ver-top">
                                <span class="trace-label"> Expected Hash (Locally calculated) : </span>&nbsp;
                                {expectedHash}
                            </div>
                        )}

                        {actualHash && (
                            <div className="hash-container scale-up-ver-top">
                                <span class="trace-label"> Actual Hash (From smart contract) :</span>&nbsp;
                                {actualHash}
                            </div>
                        )}

                        {verified && (
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "15px" }} className="scale-up-ver-top">
                                <img className="icon-img" src={checkSrc} alt="Verified" />
                                <p className="trace-hash-container hash-container">
                                    <b className="verified">VERIFIED</b>
                                    <div>
                                        <span className="trace-hash">{actualHash}</span>
                                    </div>
                                </p>
                            </div>
                        )}

                    </div>


                </div>
            </div>
        </div>

    );
}


export default BlockchainPanel;