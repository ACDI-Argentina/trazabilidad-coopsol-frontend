import MapLocationDotSolid from '../assets/imgs/map-location-dot-solid.svg';
import LocationDotSolid from '../assets/imgs/location-dot-solid.svg';
import { Modal } from 'antd';
import { useState } from 'react';

const LocationIcon = () => (<img className="location-icon" src={LocationDotSolid} />);
const ShowInMap = () => (<img src={MapLocationDotSolid} width='25' alt="Show in map" />);

const apiarios = [{
    name: "Apiario CM 7 | CAMPO AMOR (4230) - SE",
    geolocation: "-28.63491,-64.40391",
    owner: "Villa Victor Edilberto (20-18495202-6)"
}, {
    name: "Apiario CM 8 | CAMPO AMOR (4230) - SE",
    geolocation: "-28,63267,-64,40334",
    owner: "Villa Victor Edilberto (20-18495202-6)"
}, {
    name: "Apiario CM 9 | CAMPO AMOR (4230) - SE",
    geolocation: " -28,63267,-64,41022",
    owner: "Villa Victor Edilberto (20-18495202-6)"
}
];



const TracePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    const product = {
        name: "Miel orgánica monoflora de Atamisqui Wayra 440Gr",
        lot: "2123",
        consignment: "20200812102834140",
        expirationDate: "12/08/2022"
    }


    return (
        <>
            <div id="main-container">
                <div id="main-content" className="col-md-6 col-md-push-3">
                    <div className="panel panel-default teal">
                        <div className="panel-heading">
                            Trace item
                        </div>
                        <div id="gepir-form-container" className="panel-body">
                            <form id="trace" method="POST" action="">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="keyValue">Lot Number</label>
                                        <input className="form-control" placeholder="Lot Number" id="lotNumber"
                                            name="keyValue" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="keyValue">Consignment Number</label>
                                        <input className="form-control" placeholder="Consignment Number"
                                            id="consigmentNumber" name="keyValue" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <button name="method" value="trace" type="submit" className="button-5"
                                            id="submit-button">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

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

                    <div id="trace-content" className="panel panel-default teal">
                        <div className="panel-heading">
                            Movimientos
                        </div>
                        <div className="panel-body">
                            <div className="rw-container">
                                <div className="stage-header">
                                    <span className="stage-title">Fraccionado</span> - Nro de lote - Nro partida - fecha
                                </div>
                                <div className="stage-input">Entrada tambor xx - de donde viene</div>
                                <div className="stage-input">Entrada tambor yy - de donde viene</div>
                                <div className="stage-input">Entrada tambor zz - de donde viene</div>
                            </div>
                            <div className="rw-container">
                                <div className="stage-header">
                                    <span className="stage-title">Homogeneizado</span> - Nro de lote - Nro partida - fecha
                                </div>
                                <div className="stage-input">
                                    <a href="#extraccion-tambor-x">Entrada tambor x - de donde viene</a></div>
                                <div className="stage-input">
                                    <a href="#extraccion-tambor-y">Entrada tambor y - de donde viene</a></div>
                                <div className="stage-input">
                                    <a href="#extraccion-tambor-z">Entrada tambor z - de donde viene</a></div>
                            </div>
                            <div className="rw-container">
                                <div className="stage-header" id="extraccion-tambor-x">
                                    <span className="stage-title">Extracción tambor x</span> - Nro de lote - Nro partida - fecha
                                </div>
                                <div className="stage-input">Alza a</div>
                                <div className="stage-input">Alza b</div>
                                <div className="stage-input">Alza c</div>
                            </div>
                            <div className="rw-container">
                                <div className="stage-header" id="extraccion-tambor-y">
                                    <span className="stage-title">Extracción tambor y</span> - Nro de lote - Nro partida - fecha
                                </div>
                                <div className="stage-input">Alza x</div>
                                <div className="stage-input">Alza y</div>
                                <div className="stage-input">Alza z</div>
                            </div>
                            <div className="rw-container">
                                <div className="stage-header" id="extraccion-tambor-z">
                                    <span className="stage-title">Ingreso tambor z</span> - Nro de lote - Nro partida - fecha
                                </div>
                                <div className="stage-input">Apiario 1 - id del apiario, ubicación aproximada, productor</div>
                                <div className="stage-input">Apiario 2 - id del apiario, ubicación aproximada , productor</div>
                                <div className="stage-input">Apiario 3 - id del apiario, ubicación aproximada , productor</div>
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-default teal">
                        <div id="origen-heading" className="panel-heading">
                            Origen
                            <div className="show-in-map">
                                <a onClick={showModal} title="Show in map">
                                    <ShowInMap />
                                </a>
                            </div>
                        </div>
                        <div className="panel-body">
                            {apiarios.map((apiario, idx) => (
                                <div className="rw-container" key={idx}>
                                    <b>{apiario.name}</b>
                                    <div>
                                        <a onClick={showModal}>
                                            <LocationIcon />
                                            {apiario.geolocation}</a> - {apiario.owner}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <Modal title="Apiarios Map" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {apiarios.map((apiario,idx) => (
                    <div>{apiario.geolocation}</div>
                ))}
            </Modal>
        </>
    )
}

export default TracePage;