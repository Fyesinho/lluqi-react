import React, {Component} from 'react';
//Assets
import './LluNewsletter.css';
import GiButton from "../../Common/GiButton";

class LluNewsletter extends Component {
    render() {
        return (
            <div className="llu-newsletter">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore </p>
                <h1>¿Quieres recibir novedades de <span>Lluqi.com</span> en tu correo?</h1>
                <p style={{marginBottom: "50px"}} className="container">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div style={{display: "unset"}} className="form-inline">
                    <input placeholder="tu correo electrónico" className="form-control form-group" type="text"/>
                    <GiButton className="btn btn-primary">Suscribirme</GiButton>
                </div>
            </div>
        )
    }
}

export default LluNewsletter;