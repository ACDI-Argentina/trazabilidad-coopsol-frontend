import React from "react";
import objectHash from "object-hash";
import { demoApiarios, demoProduct, demoTrace } from '../demo/trace';

export const TraceContext = React.createContext();

const WithTraceContext = ({children}) => {
    const context = {
        getTrace: async (traceId) => {
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
            console.log(`calculate trace hash and validate against smart contract`,trace)
            const hashed = objectHash(trace, {algorithm: "SHA256", encoding:"hex"});
            console.log(hashed);


        }
    }


    return(
        <TraceContext.Provider value={context}>
            {children}
        </TraceContext.Provider>
    )
}

export default WithTraceContext;