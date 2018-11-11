import React, {Component} from 'react';
import LluMonth from "../../LluCommon/LluMonth/LluMonth";
import './LluCalendar.css';

class LluCalendar extends Component {
    render() {
        const arrayMonths = this.props.months ? this.props.months.map(el => el.id) : [];
        if (arrayMonths.length === 0) {
            return (<div>Cargando Meses</div>);
        }
        return (
            <div className="llu-calendar container">
                <h2>Meses disponible para recibir ayuda</h2>
                <div className="d-flex">
                    <LluMonth available={arrayMonths.includes(1)} title="Enero"/>
                    <LluMonth available={arrayMonths.includes(2)} title="Febrero"/>
                    <LluMonth available={arrayMonths.includes(3)} title="Marzo"/>
                    <LluMonth available={arrayMonths.includes(4)} title="Abril"/>
                    <LluMonth available={arrayMonths.includes(5)} title="Mayo"/>
                    <LluMonth available={arrayMonths.includes(6)} title="Junio"/>
                </div>
                <div className="d-flex">
                    <LluMonth available={arrayMonths.includes(7)} title="Julio"/>
                    <LluMonth available={arrayMonths.includes(8)} title="Agosto"/>
                    <LluMonth available={arrayMonths.includes(9)} title="Septiembre"/>
                    <LluMonth available={arrayMonths.includes(10)} title="Octubre"/>
                    <LluMonth available={arrayMonths.includes(11)} title="Noviembre"/>
                    <LluMonth available={arrayMonths.includes(12)} title="Diciembre"/>
                </div>
            </div>
        );
    }
}

export default LluCalendar;

