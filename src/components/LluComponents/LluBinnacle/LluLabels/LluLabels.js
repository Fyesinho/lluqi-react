import React, {Component} from 'react';
import LluLabel from "./LluLabel/LluLabel";
//Assets
import './LluLabels.css';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";

class LluLabels extends Component {
    render() {
        return (
            <div className="llu-labels container d-flex">
                <LluLabel className='llu-label_all llu-label_primary'>
                    <LluIcon className="fas fa-thumbtack"/> Todas las estadías
                </LluLabel>
                <LluLabel className='llu-label_all llu-label_pendent'>
                    <LluIcon className="fas fa-clock"/> Estadías Pendientes
                </LluLabel>
                <LluLabel className='llu-label_all llu-label_success'>
                    <LluIcon className="fas fa-check"/> Estadías Realizadas
                </LluLabel>
                <LluLabel className='llu-label_all llu-label_failed'>
                    <LluIcon className="fas fa-times-circle"/> Estadías Fallidas
                </LluLabel>

            </div>
        );
    }
}

export default LluLabels;