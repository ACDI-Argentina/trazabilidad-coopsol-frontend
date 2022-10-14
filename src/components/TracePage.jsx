
import { useContext } from 'react';
import { useState } from 'react';
import { TraceContext } from '../contexts/TraceContext';

import Loader from './Loader';
import BlockchainPanel from './trace/BlockchainPanel';
import ProductPanel from './trace/ProductPanel';
import TraceResult from './trace/TraceResult';


const TracePage = () => {
    const [verified, setVerified] = useState(false);
    const [hash, setHash] = useState("");
    const [lotNumber, setLotNumber] = useState("2123");
    const [itemNumber, setItemNumber] = useState("20200812102834148");
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState();
    const [apiarios, setApiarios] = useState();
    const [trace, setTrace] = useState();

    const { getTrace, validateTrace } = useContext(TraceContext);


    async function search(ev) {
        ev.preventDefault();
        if (loading) return;
        setVerified(false);
        setHash("");

        setLoading(true);
        try {
            const traceId = `${lotNumber}-${itemNumber}`; //Get values from form using ref 
            const trace = await getTrace(traceId);
            const {expected, actual} = await validateTrace(trace); //Set status of validating

            if(expected === actual){
                setVerified(true);
                console.log(actual);
                setHash(actual);
            }
            console.log(trace);

            setProduct(trace.product);
            setTrace(trace.trace);
            setApiarios(trace.sources);
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

                    <BlockchainPanel verified={verified} hash={hash}/>

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