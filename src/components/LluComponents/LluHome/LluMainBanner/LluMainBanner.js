import React from 'react';
import {Link} from 'react-router-dom';
//Assets
import './LluMainBanner.css';
import LluButton from "../../LluCommon/LluButton/LluButton";
import LluModalsSelectRegister from "../../../LluModals/LluModalsSelectRegister/LluModalsSelectRegister";

const LluMainBanner = () => {
    const user = sessionStorage.getItem('user');
    const style = user ? {marginTop: 0} : {marginTop: 80};
    return (
        <div className="llu-main_banner" style={style}>
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
                    <LluModalsSelectRegister/> : null}
                <Link to={'destinos'}><LluButton className="btn btn-border">¡Quiero ver mas destinos!</LluButton></Link>
            </div>
        </div>
    );
};

export default LluMainBanner;