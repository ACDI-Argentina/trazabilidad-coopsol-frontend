import React, { useEffect } from "react";
import objectHash from "object-hash";
import { demoApiarios, demoProduct, demoTrace } from '../demo/trace';
import { getHash } from "../contracts/TraceabilityContract";
import axios from "axios";

//Crear instancia c/base url
import config from "../config";
const { TRACEABILITY_BACKEND } = config;

export const TraceContext = React.createContext();

const WithTraceContext = ({ children }) => {
    const context = {
        getTrace: async (traceId) => {
            console.log("get trace:", traceId)

            const response = await axios.get(`${TRACEABILITY_BACKEND}/api/v1/trace/query?id=${traceId}`)
            console.log(response.data);
            //check if is missing and if status is 200
            if (response.status === 200 && response.data) {
                return response.data;
            }

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        id: traceId,
                        product: demoProduct,
                        trace: demoTrace,
                        apiarios: demoApiarios //apiarios puede ser sources tambien
                    })
                }, Math.round(Math.random() * 3000))

            })
        },

        getExpectedHash: trace => {
            return objectHash(trace, { algorithm: "SHA256", encoding: "hex" });
        },


        validateTrace: async (trace) => {
            //Calculated 
            //Revisar xq el object hash al parecer no puede obtener el algoritmo sha256 (en object-hash/dist/object-hash 69)
        
            //Hash from smart contract
            const actual = await getHash(trace.id); //Esto puede fallar
            return actual;
    
        }
    }


    return (
        <TraceContext.Provider value={context}>
            {children}
        </TraceContext.Provider>
    )
}

export default WithTraceContext;