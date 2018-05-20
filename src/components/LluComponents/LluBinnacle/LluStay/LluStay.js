import React, {Component} from 'react';
import './LLuStay.css';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";

class LluStay extends Component {
    constructor(){
        super();
        this.getStars = this.getStars.bind(this);
    }


    getStars(number) {
        let stars = [];
        for (let i = 0; i < number; i++) {
            stars.push(i);
        }
        return stars;
    }

    render() {
        const stay = this.props.stay;
        const arrayRateUser = this.getStars(stay.rateUser);
        const arrayRateHostel = this.getStars(stay.rateHostel);
        return (
            <div className="shadow_stay llu-stay">
                <h2>{stay.username}</h2>
                <h6>{stay.destiny}</h6>
                <p><span className={stay.type}><LluIcon className="fas fa-calendar-alt"/> Fecha de llegada:</span> 11 de Enero de 2017</p>
                <p><span className={stay.type}><LluIcon className="fas fa-calendar-alt"/> Fecha de partida:</span> 28 de Enero de 2017</p>
                <hr/>
                <p><span className={stay.type}><LluIcon className="fas fa-tag"/> Ayuda prestada:</span> {stay.help}</p>
                <p><span className={stay.type}><LluIcon className="fas fa-handshake"/> A cambio de:</span> {stay.bring}</p>
                <p><span className={stay.type}><LluIcon
                    className="fas fa-clock"/> Cantidad total de horas de ayuda en el hostal:</span> {stay.totalHours} horas</p>
                <hr/>
                <div className="d-flex">
                    <div className="col-3 text-center border-right">
                        <div className={`number ${stay.type}`}>
                            {stay.totaldays}
                        </div>
                        <p>días en hostal</p>
                    </div>
                    <div className="col-3 text-center pt-3 border-right">
                        <div>
                            {arrayRateUser && arrayRateUser.map((value, index) =>{
                                return <LluIcon key={index} className="fas fa-star"/>;
                            })}
                        </div>
                        <p>Calificación</p>
                        <p className="font-weight-bold">dada al viajero</p>
                    </div>
                    <div className="col-3 text-center pt-3">
                        <div>
                            {arrayRateHostel && arrayRateHostel.map((value, index) =>{
                                return <LluIcon key={index} className="fas fa-star"/>;
                            })}
                        </div>
                        <p>Calificación</p>
                        <p className="font-weight-bold">recibida para hostal</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LluStay;