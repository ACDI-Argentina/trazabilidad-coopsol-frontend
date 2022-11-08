import checkSrc from "../../assets/imgs/check.png";
import warnSrc from "../../assets/imgs/warn.png";
import Dots from "../ui/dots";

const ValidationPanel = ({ verifying, expectedHash, actualHash }) => {
    const verified = actualHash && expectedHash === actualHash;

    return (
        <>  
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
                                    <span className="trace-label"> Expected Hash (From smart contract) :</span>&nbsp;
                                    {expectedHash}
                                </div>
                            )}

                            {actualHash && (
                                <div className="hash-container scale-up-ver-top">
                                    <span className="trace-label"> Actual Hash (Locally calculated) : </span>&nbsp;
                                    {actualHash}
                                </div>
                            )}


                            {verified ? (
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "15px" }} className="verify-result scale-up-ver-top">
                                    <img className="icon-img" src={checkSrc} alt="Verified" />
                                    <div className="trace-hash-container hash-container">
                                        <b className="verified">VERIFIED</b>
                                        <div>
                                            <span className="trace-hash verified">{actualHash}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                actualHash && expectedHash && (

                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "15px" }} className=" verify-result not-match scale-up-ver-top">
                                        <img className="icon-img warn" src={warnSrc} alt="Hashes does not match" />
                                        <div className="trace-hash-container hash-container">
                                            <b className="not-match">HASHES DOES NOT MATCH</b>
                                            <p>
                                                Recovered trace was modified, and the hash does not match the one stored in the smart contract
                                            </p>

                                            <div>
                                                <span className="trace-hash not-match">{actualHash}</span>
                                            </div>
                                        </div>
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


export default ValidationPanel;