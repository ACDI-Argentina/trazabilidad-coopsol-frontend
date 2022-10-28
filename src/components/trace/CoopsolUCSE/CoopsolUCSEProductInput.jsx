const CoopsolUCSEProductInput = ({ inputs }) => {
    return (
        <div className="panel panel-default teal">
            <div className="panel-heading">
                Sources
            </div>
            <div className="panel-body">
                {inputs?.map((input, idx) => (
                    <div className="stage coopsol-stage" key={idx}>
                        <div className="rw-container">
                            <span className="c-label">Beekeper: &nbsp;</span>
                            <span>{input.Productor}</span>
                        </div>
                        <div className="rw-container">
                            <span className="c-label">Apiary: &nbsp;</span>
                            <span>{input.Apiario}</span>
                        </div>
                        <div className="rw-container">
                            <span className="c-label">Input: &nbsp;</span>
                            <span>{input.Producto}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CoopsolUCSEProductInput;