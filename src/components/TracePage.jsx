
import { useContext } from 'react';
import { useState } from 'react';
import { TraceContext } from '../contexts/TraceContext';

import Loader from './Loader';
import BlockchainPanel from './trace/BlockchainPanel';
import ProductPanel from './trace/ProductPanel';
import TraceResult from './trace/TraceResult';


const TracePage = () => {
    const [lotNumber, setLotNumber] = useState("2123");
    const [itemNumber, setItemNumber] = useState("20200812102834140");
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState();
    const [apiarios, setApiarios] = useState();
    const [trace, setTrace] = useState();

    const { getTrace, validateTrace } = useContext(TraceContext);


    async function search(ev) {
        ev.preventDefault();
        if (loading) return;

        setLoading(true);
        try {
            console.log("Search ")
            const traceId = `${lotNumber}/${itemNumber}`; //Get values from form using ref 
            console.log(traceId);

            const trace = await getTrace(traceId);
            validateTrace(trace); //Set status of validating

            setTrace(trace.trace);
            setProduct(trace.product);
            setApiarios(trace.apiarios);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);

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
                                        <input
                                            className="form-control"
                                            placeholder="Lot Number" id="lotNumber"
                                            value={lotNumber}
                                            onChange={ev => setLotNumber(ev.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="keyValue">Item Number</label>
                                        <input
                                            className="form-control"
                                            placeholder="Item Number"
                                            type="text"
                                            value={itemNumber}
                                            onChange={ev => setItemNumber(ev.target.value)} />
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