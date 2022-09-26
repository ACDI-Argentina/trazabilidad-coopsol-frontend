import { useState } from "react";
import MapLocationDotSolid from '../../assets/imgs/map-location-dot-solid.svg';
import LocationDotSolid from '../../assets/imgs/location-dot-solid.svg';
import { Modal } from 'antd';

const LocationIcon = () => (<img className="location-icon" src={LocationDotSolid} />);
const ShowInMap = () => (<img src={MapLocationDotSolid} width='25' alt="Show in map" />);


const TraceResult = ({ apiarios, trace }) => {

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



    return (
        <>
            <div id="trace-content" className="panel panel-default teal">
                <div className="panel-heading">
                    Movimientos
                </div>
                <div className="panel-body">
                    {trace.stages.map((stage, idx) => {
                        return (
                            <div key={idx} className="rw-container">
                                <div className="stage-header">
                                    <span className="stage-title">{stage.bussinessDescription}</span> - Nro de lote - Nro partida - fecha
                                </div>
                                {stage.inputs?.map((input, iddx) => {
                                    return (
                                        <div key={`${stage}_${iddx}`} className="stage-input">{input}</div>
                                    )
                                })}
                            </div>
                        );
                    })}
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

            <Modal title="Apiarios Map" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {apiarios.map((apiario, idx) => (
                    <div key={idx}>{apiario.geolocation}</div>
                ))}
            </Modal>
        </>
    )
};


export default TraceResult