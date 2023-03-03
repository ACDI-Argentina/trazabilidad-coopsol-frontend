import ContractInfo from "../ContractInfo";
import CoopsolUCSEProductInput from "./CoopsolUCSEProductInput";
import CoopsolUCSEProductPanel from "./CoopsolUCSEProductPanel";

/* Componente para mostrar las trazas con el formato de coopsol - UCSE */
const CoopsolUCSEPanel = ({ trace, locallyComputedHash, smartContractStoredHash, verifying }) => {
    return (
        <>
            {trace && !trace.trace && (
                <CoopsolUCSEProductPanel
                    trace={trace}
                    locallyComputedHash={locallyComputedHash}
                    smartContractStoredHash={smartContractStoredHash}
                    verifying={verifying}
                />
            )}
            <ContractInfo />

            {trace && !trace.trace && (
                <CoopsolUCSEProductInput inputs={trace.Entradas} />
            )}
        </>
    )
}
export default CoopsolUCSEPanel;