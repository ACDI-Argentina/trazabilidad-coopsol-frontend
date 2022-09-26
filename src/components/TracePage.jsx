
import { useState } from 'react';
import { demoApiarios, demoProduct, demoTrace } from '../demo/trace';
import Loader from './Loader';
import BlockchainPanel from './trace/BlockchainPanel';
import ProductPanel from './trace/ProductPanel';
import TraceResult from './trace/TraceResult';


const TracePage = () => {

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState();
    const [apiarios, setApiarios] = useState();
    const [trace, setTrace] = useState();



    async function search(ev) {
        ev.preventDefault();
        if (loading) return;

        console.log("Search ")
        setLoading(true);
        setTimeout(() => {
            setProduct(demoProduct);
            setTrace(demoTrace);
            setApiarios(demoApiarios);
            setLoading(false);
        }, 3000)

        try {
            //waot
        } catch (err) {
            console.log(err);
        }

    }


    return (
        <>
            <div id="main-container">
                <div id="main-content" className="col-md-6 col-md-push-3">
                    <div className="panel panel-default teal">
                        <div className="panel-heading">
                            Trace item
                        </div>
                        <div id="gepir-form-container" className="panel-body">
                            <form id="trace" method="POST" action="">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="keyValue">Lot Number</label>
                                        <input className="form-control" placeholder="Lot Number" id="lotNumber"
                                            name="keyValue" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="keyValue">Consignment Number</label>
                                        <input className="form-control" placeholder="Consignment Number"
                                            id="consigmentNumber" name="keyValue" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <button
                                            className="button-5"
                                            id="submit-button"
                                            onClick={search}>
                                            Search
                                            <div className="loader"></div>

                                            <Loader active={loading} />

                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <BlockchainPanel />
                    {!loading && (
                        <>
                            {product && (
                                <ProductPanel product={product} />
                            )}

                            {apiarios && trace && (
                                <TraceResult
                                    apiarios={apiarios}
                                    trace={trace} />
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default TracePage;