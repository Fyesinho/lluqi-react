import React, {Component} from 'react';
import LluMonth from "../../LluCommon/LluMonth/LluMonth";
import './LluCalendar.css';

class LluCalendar extends Component {
    render() {
        return (
            <div className="llu-calendar container">
                <h2>Meses disponible para recibir ayuda</h2>
                <div className="d-flex">
                    <LluMonth available={true} title="Enero"/>
                    <LluMonth available={true} title="Febrero"/>
                    <LluMonth title="Marzo"/>
                    <LluMonth available={true} title="Abril"/>
                    <LluMonth title="Mayo"/>
                    <LluMonth title="Junio"/>
                </div>
                <div className="d-flex">
                    <LluMonth title="Julio"/>
                    <LluMonth available={true} title="Agosto"/>
                    <LluMonth title="Septiembre"/>
                    <LluMonth available={true} title="Octubre"/>
                    <LluMonth title="Noviembre"/>
                    <LluMonth available={true} title="Diciembre"/>
                </div>
            </div>
        )
    }
}

export default LluCalendar;

