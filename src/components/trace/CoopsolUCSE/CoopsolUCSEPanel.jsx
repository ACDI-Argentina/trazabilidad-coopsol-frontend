import ContractInfo from "../ContractInfo";
import CoopsolUCSEProductInput from "./CoopsolUCSEProductInput";
import CoopsolUCSEProductPanel from "./CoopsolUCSEProductPanel";

/* Componente para mostrar las trazas con el formato de coopsol - UCSE */
const CoopsolUCSEPanel = ({ trace, actualHash, expectedHash, verifying }) => {




    return (
        <>
            {trace && !trace.trace && (
                <CoopsolUCSEProductPanel
                    trace={trace}
                    actualHash={actualHash}
                    expectedHash={expectedHash}
                    verifying={verifying}
                />
            )}x 
            <ContractInfo />

            {trace && !trace.trace && (
                <CoopsolUCSEProductInput inputs={trace.Entradas} />
            )}
        </>
    )
}
export default CoopsolUCSEPanel;