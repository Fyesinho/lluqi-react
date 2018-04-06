import React, {Component} from 'react';
//Assets
import './LluMainBanner.css';
import LluButton from "../../LluCommon/LluButton/LluButton";

class LluMainBanner extends Component {
    render() {
        return (
            <div className="llu-main_banner">
                <div className="main-title">
                    <p className="title">Viaja y ahorra</p>
                    <p className="subtitle">colaborando en tu destino.</p>
                </div>
                <div className="description">
                    <p>Ahorra durante tu próximo viaje, comparte tus habilidades a cambio de alojamiento.</p>
                    <p>No necesitas tener experiencia previa, lo importante es compartir lo mejor que sabes hacer.</p>
                </div>
                <div className="button-onboarding">
                    <LluButton className="btn btn-primary shadow">¡Crear cuenta en Lluqi.com!</LluButton>
                    <LluButton className="btn btn-border">¡Quiero ver mas destinos!</LluButton>
                </div>
            </div>
        )
    }
}

// background: #ffb400;
// width: 310px;
// height: 44px;
// font-weight: bold;
// color: white;
// margin-right: 20px;
// box-shadow: 2px 2px 0px 2px #c5c8d1

export default LluMainBanner;