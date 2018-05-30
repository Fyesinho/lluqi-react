import React, {Component} from 'react';
import LluButton from "../../LluCommon/LluButton/LluButton";
//Assets
import './LluHostelInformation.css';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";

class LluHostelInformation extends Component {
    render() {
        const image = 'https://content3.jdmagicbox.com/comp/ahmedabad/x2/079pxx79.xx79.131230234016.g9x2/catalogue/chokshi-p-g-and-hostel-c-g-road-ahmedabad-paying-guest-accommodation-for-men-1g8iff1.jpg';
        return (
            <div className="llu-hostel_information container">
                <div className="container title">
                    <h1>Costamora Hotel</h1>
                    <h4>Valparaiso, Chile</h4>
                </div>
                <div className="cont_information">
                    <figure className="information">
                        <img src={image} alt="logo"/>
                        <figcaption>
                            <h3>Don Eustaquio</h3>
                            <p>Anfitrión Hostal</p>
                            <small><LluIcon style={{color: 'green'}} className="fas fa-check-circle"/> Perfil Verificado
                            </small>
                            <br/>
                            <small>Registrado desde</small>
                            <p>09/29/2016</p>
                            <small>Última actividad online</small>
                            <p>11/14/2016</p>
                        </figcaption>
                    </figure>
                    <div className="estadia">
                        <div>
                            <div className="estadia_table">
                                <small>Estadía Mínima</small>
                                <p>1 semana</p>
                            </div>
                            <div className="estadia_table">
                                <small>Viajeros Recibidos</small>
                                <p>4 travelers</p>
                            </div>
                        </div>
                        <div>
                            <div className="estadia_table">
                                <small>Estadía Máxima</small>
                                <p>2 semanas</p>
                            </div>
                            <div className="estadia_table">
                                <small>Calificaciones de viajeros</small>
                                <p>
                                    <LluIcon className="fas fa-star"/>
                                    <LluIcon className="fas fa-star"/>
                                    <LluIcon className="fas fa-star"/>
                                </p>
                            </div>
                        </div>
                        <div>
                            <LluButton className="btn btn-primary shadow row">
                                Postular a este hostal
                            </LluButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LluHostelInformation;