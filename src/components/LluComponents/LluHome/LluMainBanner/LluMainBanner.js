import React, {Component} from 'react';
//Assets
import './LluMainBanner.css';
import LluButton from "../../LluCommon/LluButton/LluButton";
import LluModalsSelectRegister from "../../../LluModals/LluModalsSelectRegister/LluModalsSelectRegister";

class LluMainBanner extends Component {
    render() {
        const user = sessionStorage.getItem('user');
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
                    {!user ?
                        <LluModalsSelectRegister/> : null }
                    <LluButton className="btn btn-border">¡Quiero ver mas destinos!</LluButton>
                </div>
            </div>
        )
    }
}

export default LluMainBanner;