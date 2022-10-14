import { useState } from "react";
import MapLocationDotSolid from '../../assets/imgs/map-location-dot-solid.svg';
import LocationDotSolid from '../../assets/imgs/location-dot-solid.svg';
import arrowFrom from '../../assets/imgs/arrow-right-from-bracket-solid.svg';
import arrowTo from '../../assets/imgs/arrow-right-to-bracket-solid.svg';


import { Modal } from 'antd';
import moment from "moment";

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
                    Events
                </div>
                <div className="panel-body">
                    {trace.map((stage, idx) => {
                        return (
                            <div key={idx} className="rw-container">
                                <div className="stage-header">
                                    <span>{moment(stage.date).format("DD/MM/YYYY HH:mm")}</span> - &nbsp;
                                    <span className="stage-title">{stage.type}</span>
                                </div>

                                {Array.isArray(stage?.inputs) && stage.inputs.length > 0 && (

                                    <div>
                                        <div className="stage-details-title inputs-title">
                                            <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                            <img className="img-icon" src={arrowTo} alt="to" />
                                            Inputs
                                        </div>
                                        {stage.inputs?.map((input, iddx) => {
                                            return (
                                                <div key={`${stage}_${iddx}`} className="stage-input">{input}</div>
                                            )
                                        })}
                                    </div>
                                )}

                                {Array.isArray(stage?.outputs) && stage.outputs.length > 0 && (

                                    <div>
                                        <div className="stage-details-title outputs-title">
                                            <img className="img-icon" src={arrowFrom} alt="from" />
                                            Outputs
                                        </div>
                                        {stage.outputs?.map((output, iddx) => {
                                            return (
                                                <div key={`${stage}_${iddx}`} className="stage-output">{output}</div>
                                            )
                                        })}
                                    </div>
                                )}




                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="panel panel-default teal">
                <div id="origen-heading" className="panel-heading">
                    Sources
                    <div className="show-in-map">
                        <a onClick={showModal} title="Show in map">
                            <ShowInMap />
                        </a>
                    </div>
                </div>
                <div className="panel-body">
                    {apiarios.map((apiario, idx) => {
                        const { lat, lng } = apiario.geolocation;
                        const geolocation = `${lat}, ${lng}`;
                        return (
                            <div className="rw-container" key={idx}>
                                <b>{apiario.name}</b>
                                <div>
                                    <a onClick={showModal}>
                                        <LocationIcon />
                                        {geolocation}</a> - {apiario.beekeper}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <Modal title="Apiarios Map" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {apiarios.map((apiario, idx) => {
                    const { lat, lng } = apiario.geolocation;
                    const geolocation = `${lat}, ${lng}`;
                    return (
                        <div key={idx}>{geolocation}</div>
                    )
                })}
            </Modal>
        </>
    )
};


export default TraceResult