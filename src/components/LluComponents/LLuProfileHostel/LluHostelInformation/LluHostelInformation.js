import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//Assets
import './LluHostelInformation.css';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";

class LluHostelInformation extends Component {

    getStars = counter => {
        if(counter === 0) {
            return 'No tiene calificaciones';
        }
        let stars = [];
        for (let i = 0; i < counter; i++) {
            stars.push(<LluIcon key={i} className="fas fa-star"/>)
        }
        return stars
    };

    render() {
        const {hostel} = this.props;
        const user = JSON.parse(sessionStorage.getItem('user'));
        const goToChat = user.is_pro || user.is_proplus || user.is_gold;

        return (
            <div className="llu-hostel_information container">
                <div className="container title">
                    <h1>{hostel.name_hostel}</h1>
                    <h4>{hostel.city && hostel.city.city}</h4>
                </div>
                <div className="cont_information">
                    <figure className="information">
                        <img src={hostel.avatar} alt="logo"/>
                        <figcaption>
                            <h3>{hostel.name_host}</h3>
                            <p>Anfitrión Hostal</p>
                            <small><LluIcon style={{color: 'green'}} className="fas fa-check-circle"/> Perfil Verificado
                            </small>
                            <br/>
                            <small>Registrado desde</small>
                            <p>{hostel.created_at && hostel.created_at.substring(0,10)}</p>
                            <small>Última actividad online</small>
                            <p>{hostel.updated_at && hostel.updated_at.substring(0,10)}</p>
                        </figcaption>
                    </figure>
                    <div className="estadia">
                        <div>
                            <div className="estadia_table">
                                <small>Estadía Mínima</small>
                                <p>{hostel.start_stay} semana</p>
                            </div>
                            <div className="estadia_table">
                                <small>Viajeros Recibidos</small>
                                <p>{hostel.travelers_reciebed} travelers</p>
                            </div>
                        </div>
                        <div>
                            <div className="estadia_table">
                                <small>Estadía Máxima</small>
                                <p>{hostel.end_stay} semanas</p>
                            </div>
                            <div className="estadia_table">
                                <small>Calificaciones de viajeros</small>
                                <p>
                                    {this.getStars(hostel.calification)}
                                </p>
                            </div>
                        </div>
                        <div>
                            <Link to={goToChat ? '/mensajes' : '/prepago'} className="btn btn-primary shadow row">
                                Postular a este hostal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LluHostelInformation;