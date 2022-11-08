
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TraceContext } from '../contexts/TraceContext';


import ValidationPanel from './trace/ValidationPanel';
import ProductPanel from './trace/ProductPanel';
import SearchPanel from './trace/SearchPanel';
import TraceNotFoundPanel from './trace/TraceNotFoundPanel';
import TraceResult from './trace/TraceResult';

import "../index.css";
import Loader from './Loader';
import CoopsolUCSEPanel from './trace/CoopsolUCSE/CoopsolUCSEPanel';
import ContractInfo from './trace/ContractInfo';

const sleep = ms => new Promise((resolve, reject) => {
    setTimeout(() => resolve(ms), ms)

});


const TracePage = () => {
    const { traceId } = useParams();

    const [verifying, setVerifying] = useState(false);
    const [expectedHash, setExpectedHash] = useState(""); //Locally computed
    const [actualHash, setActualHash] = useState(""); //From smart contract

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState();
    const [apiarios, setApiarios] = useState();
    const [trace, setTrace] = useState();

    const { getTrace, getStoredHash, calculateHash } = useContext(TraceContext);

    const [traceNotFound, setTraceNotFound] = useState(false);

    useEffect(() => {
        if (traceId) {
            search();
        }
    }, [traceId])


    function clearResult() {
        setTraceNotFound(false);
        setExpectedHash("");
        setActualHash("");
        setProduct(undefined);
        setTrace(undefined);
        setApiarios(undefined);
    }

    async function search(lotNumber, itemNumber) {
        if (loading) return;
        clearResult();
        setLoading(true);
        try {
            console.log(traceId)
            const lTraceId = traceId ? traceId : `${lotNumber}-${itemNumber}`; //Get values from form using ref 
            const trace = await getTrace(lTraceId);

            if (trace.trace) {
                setProduct(trace.product);
                setTrace(trace.trace);
                setApiarios(trace.sources);
            } else {
                //CoopsolUCSE trace
                setTrace(trace);
            }

            setTimeout(async () => {
                setVerifying(true);
                await sleep(1400);

                const expected = await getStoredHash(trace); //Set status of validating
                setExpectedHash(expected);

                await sleep(1400);

                const actual = calculateHash(trace);
                setActualHash(actual);

                await sleep(400);
                setVerifying(false);
            }, 100)



        } catch (err) {

            if (err.name === "AxiosError" && err.response?.status === 404) {
                console.log("SET TRACE NOT FOUND")
                setTraceNotFound(true);
            } else {
                console.log(err);
            }
        }
        setLoading(false);

    }


    return (
        <>
            <div id="main-container">
                <div id="main-content" className="col-lg-6 col-lg-push-3 col-md-8 col-md-push-2 col-sm-10 col-sm-push-1">

                    {
                        traceId && (
                            <>
                                <div className='page-heading'>
                                    Trace for item {traceId}
                                </div>

                                <div className={`page-subheading ${loading ? "" : "fade-out"}`}>
                                    Loading
                                    <Loader active color="blue" />
                                </div>
                            </>
                        )
                    }
                    {!traceId && (
                        <SearchPanel
                            search={search}
                            loading={loading}
                        />

                    )}

                    <ContractInfo />

                    <ValidationPanel
                        verifying={verifying}
                        expectedHash={expectedHash}
                        actualHash={actualHash}
                    />

                    {traceNotFound && <TraceNotFoundPanel />}

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
                            {trace && !trace.trace && (
                                <CoopsolUCSEPanel trace={trace} />
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default TracePage;