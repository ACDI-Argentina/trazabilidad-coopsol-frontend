const CoopsolUCSEProductPanel = ({ trace }) => {

    if(!trace.Producto) return null;


    return (
        <div className="panel panel-default teal">
            <div className="panel-heading">
                General information
            </div>
            <div className="panel-body">
                <div className="rw-container">
                    <span className="c-label">Product: </span>
                    <span>{trace.Producto}</span>
                </div>
                <div className="rw-container">
                    <span className="c-label">Lot Item number: </span>
                    <span>{trace.NroLotePartida}</span>
                </div>
                <div className="rw-container">
                    <span className="c-label">Production type: </span>
                    <span>{trace["Tipo producción"]}</span>
                </div>
                {trace?.expirationDate && (
                    <div className="rw-container">
                        <span className="c-label">Due date: </span>
                        <span>{trace.expirationDate}</span>
                    </div>

                )}

            </div>
        </div>
    )
}

export default CoopsolUCSEProductPanel;