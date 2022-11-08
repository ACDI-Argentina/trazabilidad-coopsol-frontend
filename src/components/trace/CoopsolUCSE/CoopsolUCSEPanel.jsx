import CoopsolUCSEProductInput from "./CoopsolUCSEProductInput";
import CoopsolUCSEProductPanel from "./CoopsolUCSEProductPanel";

/* Componente para mostrar las trazas con el formato de coopsol - UCSE */
const CoopsolUCSEPanel = ({ trace }) => {
    return (
        <>
        <CoopsolUCSEProductPanel trace={trace}/>
        <CoopsolUCSEProductInput inputs={trace.Entradas} />
        </>
    )
}
export default CoopsolUCSEPanel;