const ProductPanel = ({ product }) => {
    return (
        <div className="panel panel-default teal">
            <div className="panel-heading">
                Información General
            </div>
            <div className="panel-body">
                <div className="rw-container">
                    <span className="c-label">Tipo de producto: </span>
                    <span>{product.name}</span>
                </div>
                <div className="rw-container">
                    <span className="c-label">Número de lote: </span>
                    <span>{product.lot}</span>
                </div>
                <div className="rw-container">
                    <span className="c-label">Número de partida: </span>
                    <span>{product.consignment}</span>
                </div>
                <div className="rw-container">
                    <span className="c-label">Fecha de vencimiento: </span>
                    <span>{product.expirationDate}</span>
                </div>

            </div>
        </div>
    )
}

export default ProductPanel;