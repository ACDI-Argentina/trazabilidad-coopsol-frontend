import { useState } from "react";
import verifiedSrc from "../../../assets/imgs/verified.png"
import ValidationPanel from "../ValidationPanel";


const CoopsolUCSEProductPanel = ({ trace, actualHash, expectedHash, verifying }) => {

    const verified = actualHash && expectedHash === actualHash;
    const imgNames = [
        "09_250_wayra_monte_nativo.png",
        "13_450_wayra_monte_nativo.png",
        "14_450_wayra_atamisqui.png",
        "07_250_wayra_atamisqui.png",
    ];


    const [panelVisible, setPanelVisible] = useState(false);

    function toggleDetailsVisibility() {
        setPanelVisible(prev => !prev);
    }

    if (!trace.Producto) return null;

    return (
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
                            src={`https://granchaco.s3.us-west-1.amazonaws.com/test/${imgNames[2]}`}
                            alt=""
                        />

                    </div>
                </div>
                {verified && (
                        <div className="flex-grow-bottom">
                            <div className="toggle-details-container rw-container">
                                <a onClick={toggleDetailsVisibility}>See verification details</a>
                            </div>

                        </div>
                    )}

            </div>

            {verified && (
                <>
                    <div className="verified-panel scale-up-center">
                        <img
                            onClick={toggleDetailsVisibility}
                            src={verifiedSrc}
                            class="verified-img"
                            title="Verified in blockchain"
                            alt="Verified" /> {/* Click to see details */}
                    </div>

                    <div class={panelVisible ? "panel-expanded" : "panel-collapsed"}>
                        <ValidationPanel
                            verifying={verifying}
                            expectedHash={expectedHash}
                            actualHash={actualHash}
                        />

                    </div>
                </>

            )}



        </div>
    )
}

export default CoopsolUCSEProductPanel;