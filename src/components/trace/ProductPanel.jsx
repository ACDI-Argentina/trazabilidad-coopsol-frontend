const ProductPanel = ({ product }) => {
    return (
        <div className="panel panel-default teal">
            <div className="panel-heading">
                General information
            </div>
            <div className="panel-body">
                <div className="rw-container">
                    <span className="c-label">Product type: </span>
                    <span>{product.name}</span>
                </div>
                <div className="rw-container">
                    <span className="c-label">Lot number: </span>
                    <span>{product.lot}</span>
                </div>
                <div className="rw-container">
                    <span className="c-label">Item number: </span>
                    <span>{product.item}</span>
                </div>
                {product?.expirationDate && (
                    <div className="rw-container">
                        <span className="c-label">Due date: </span>
                        <span>{product.expirationDate}</span>
                    </div>

                )}

            </div>
        </div>
    )
}

export default ProductPanel;