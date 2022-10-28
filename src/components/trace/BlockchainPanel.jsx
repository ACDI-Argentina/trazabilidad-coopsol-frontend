import config from "../../config/index";
import checkSrc from "../../assets/imgs/check.png";
import warnSrc from "../../assets/imgs/warn.png";
import Dots from "../ui/dots";

const name = config.NETWORK_NAME;
const explorer = config.NETWORK_EXPLORER;
const address = config.TRACEABILITY_REGISTRY_ADDRESS;

const BlockchainPanel = ({ verifying, expectedHash, actualHash }) => {
    const verified = actualHash && expectedHash === actualHash;

    return (
        <>
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
            {(verifying || expectedHash || actualHash )&& (

                <div className="panel panel-default teal">
                    <div className="panel-body">
                        <div className="rw-container">
                            {verifying ? (
                                <div className="verifying scale-up-ver-top">
                                    <div className='spinner'></div>
                                    Verifying&nbsp;
                                    <Dots />
                                </div>
                            ): (
                                <div className={`verifying fade-out ${verified? "":""}`}>
                                <div className='spinner'></div>
                                Verifying&nbsp;
                                <Dots />
                            </div>
                            )}

                            {expectedHash && (
                                <div className="hash-container scale-up-ver-top">
                                    <span class="trace-label"> Expected Hash (From smart contract) :</span>&nbsp;
                                    {expectedHash}
                                </div>
                            )}

                            {actualHash && (
                                <div className="hash-container scale-up-ver-top">
                                    <span class="trace-label"> Actual Hash (Locally calculated) : </span>&nbsp;
                                    {actualHash}
                                </div>
                            )}


                            {verified ? (
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "15px" }} className="verify-result scale-up-ver-top">
                                    <img className="icon-img" src={checkSrc} alt="Verified" />
                                    <p className="trace-hash-container hash-container">
                                        <b className="verified">VERIFIED</b>
                                        <div>
                                            <span className="trace-hash verified">{actualHash}</span>
                                        </div>
                                    </p>
                                </div>
                            ) : (
                                actualHash && expectedHash && (

                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "15px" }} className=" verify-result not-match scale-up-ver-top">
                                        <img className="icon-img warn" src={warnSrc} alt="Hashes does not match" />
                                        <p className="trace-hash-container hash-container">
                                            <b className="not-match">HASHES DOES NOT MATCH</b>
                                            <p>
                                                Recovered trace was modified, and the hash does not match the one stored in the smart contract
                                            </p>

                                            <div>
                                                <span className="trace-hash not-match">{actualHash}</span>
                                            </div>
                                        </p>
                                    </div>
                                )


                            )}


                        </div>



                    </div >
                </div >
            )}
        </>

    );
}


export default BlockchainPanel;