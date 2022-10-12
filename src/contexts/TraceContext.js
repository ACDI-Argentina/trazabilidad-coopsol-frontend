import React from "react";
import objectHash from "object-hash";
import { demoApiarios, demoProduct, demoTrace } from '../demo/trace';
import { getHash } from "../contracts/TraceabilityContract";

export const TraceContext = React.createContext();

const WithTraceContext = ({ children }) => {
    const context = {
        getTrace: async (traceId) => {
            console.log("get trace:", traceId)
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        id: traceId,
                        product: demoProduct,
                        trace: demoTrace,
                        apiarios: demoApiarios
                    })
                }, Math.round(Math.random() * 3000))

            })
        },
        validateTrace: async (trace) => {
            //Calculated 
            //Revisar xq el object hash al parecer no puede obtener el algoritmo sha256 (en object-hash/dist/object-hash 69)
            const expected = objectHash(trace, { algorithm: "SHA256", encoding: "hex" });

            //Hash from smart contract
            const actual = await getHash(trace.id); //Esto puede fallar
            return {
                expected,
                actual
            }



        }
    }


    return (
        <TraceContext.Provider value={context}>
            {children}
        </TraceContext.Provider>
    )
}

export default WithTraceContext;