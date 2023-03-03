import { useState } from "react";
import verifiedSrc from "../../../assets/imgs/verified.png"
import Dots from "../../ui/dots";
import ValidationPanel from "../ValidationPanel";


const CoopsolUCSEProductPanel = ({ trace, locallyComputedHash, smartContractStoredHash, verifying }) => {

    const verified = locallyComputedHash && smartContractStoredHash === locallyComputedHash;
    const hashNotMatch = smartContractStoredHash !== undefined && locallyComputedHash != smartContractStoredHash;

    console.log("actual hash:", locallyComputedHash)
    console.log("expected hash (from smart contract)", smartContractStoredHash)

    const [imageLoaded, setImageLoaded] = useState(false);
    
    const images = {
        3146:"09_250_wayra_monte_nativo.png",
        3145:"13_450_wayra_monte_nativo.png",
        4163:"14_450_wayra_atamisqui.png",
        4162:"07_250_wayra_atamisqui.png",
    }

    const idProducto = trace.id.split("-")[0];

    const [panelVisible, setPanelVisible] = useState(false);

    function toggleDetailsVisibility() {
        setPanelVisible(prev => !prev);
    }

    function handleLoadImage(){
        setImageLoaded(true);
    }


    if (!trace.Producto) return null;

    return (
        <>
        <div className="panel panel-default teal coopsol-product-panel">
            <div className="panel-heading">
                General information
            </div>

            <div className="panel-body product-panel-body">

                <div className="first-column column-2">
                    <div className="rw-container">
                        <div className="c-label">Product: </div>
                        <div>{trace.Producto}</div>
                    </div>
                    <div className="rw-container">
                        <div className="c-label">Lot Item number: </div>
                        <div>{trace.NroLotePartida}</div>
                    </div>
                    <div className="rw-container">
                        <div className="c-label">Production type: </div>
                        <div>{trace["Tipo producción"]}</div>
                    </div>
                    {trace?.expirationDate && (
                        <div className="rw-container">
                            <div className="c-label">Due date: </div>
                            <div>{trace.expirationDate}</div>
                        </div>
                    )}
                </div>
                <div className="column-2 image-container">
                    <div className="img-placeholder">
                        <img
                            className="product-image"
                            onLoad={handleLoadImage}
                            src={`https://granchaco.s3.us-west-1.amazonaws.com/test/${images[idProducto]}`}
                            alt="Loading image..."
                            style={{opacity: imageLoaded? 100 : 0}}
                        />

                    </div>
                </div>

                {verifying  && ( 
                <div id="verifying" className="verifying verifying-container scale-up-ver-top">
                    <div className='spinner'></div>
                    Verifying&nbsp;
                    <Dots />
                </div>
                )}


            </div>
      

            {verified && (
                <>
                    <div className="verified-panel scale-up-center">
                        <img
                            onClick={toggleDetailsVisibility}
                            src={verifiedSrc}
                            className="verified-img"
                            title="Verified in blockchain"
                            alt="Verified" /> {/* Click to see details */}
                    </div>

                    <div className={`verification-details ${panelVisible ? "panel-expanded" : "panel-collapsed"}`}>
                        <ValidationPanel
                            verifying={verifying}
                            expectedHash={smartContractStoredHash}
                            actualHash={locallyComputedHash}
                        />

                    </div>

                    <div className="flex-grow-bottom toggle-verified-wrapper">
                        <a onClick={toggleDetailsVisibility} className="toggle-verified-details">
                            <div className="toggle-details-container verified-on-blockchain">
                                Verified on blockchain. Click to toggle details.
                            </div>
                        </a>

                    </div>

                </>

            )}
            
            {hashNotMatch && !verifying && (
                <div className="hash-doesnt-match">
                    Cannot verify product traceability. Try again later.
                </div>
            )}
                
        </div>
        </>
    )
}

export default CoopsolUCSEProductPanel;