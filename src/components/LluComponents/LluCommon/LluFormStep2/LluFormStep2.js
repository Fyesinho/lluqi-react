import React from 'react';
import LluLogo from "../LluMainHeader/LluLogo/LluLogo";
//Assets
import './LluFormStep2.css'
import LluIcon from "../LluIcon/LluIcon";
import LluModalRegisterParentStep3 from "../../../LluModals/LluModalRegisterStep3/LluModalRegisterParentStep3";
import LluButton from "../LluButton/LluButton";
import LluComponent from "../LluComponent";

class LluFormStep2 extends LluComponent {
    render() {
        return [
            <div key="header" className="llu-header_form">
                <LluLogo/>
                <h2>Crear cuenta para Viajero</h2>
                <p>Aún puedes registrarte con Facebook o Google o crear una cuenta para hostal</p>
            </div>,
            <div key="body" className="llu-body_form">
                <div className="llu-gradient"/>
                {/*Correo*/}
                <label htmlFor="basic-url">¿En qué país naciste?</label>
                <div className="input-group container">
                    <div className="input-group-prepend">
                        <LluIcon className="fa fa-map-marker"/>
                    </div>
                    <select defaultValue="País" type="select" className="llu-input_form">
                        <option disabled>País</option>
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Otro</option>
                    </select>
                    <div className="input-group-append">
                        *
                    </div>
                </div>
                <span className="llu-span_form_right">Muchos hostales le dan importancia a la diversidad cultural</span>
                {/*Nombre y Apellido*/}
                <label htmlFor="basic-url">¿En qué ciudad resides actualmente?</label>
                <div className="input-group container">
                    <div className="input-group-prepend">
                        <LluIcon className="fa fa-street-view"/>
                    </div>
                    <input placeholder="Nombre Apellido" type="text" className="llu-input_form"/>
                    <div className="input-group-append">
                        *
                    </div>
                </div>
                <span className="llu-span_form_right">***</span>
                {/*Genero*/}
                <label htmlFor="basic-url">¿Cuál es tu idioma nativo?</label>
                <div className="input-group container">
                    <div className="input-group-prepend">
                        <LluIcon className="fa fa-globe"/>
                    </div>
                    <select defaultValue="Idioma" type="select" className="llu-input_form">
                        <option disabled>Idioma</option>
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Otro</option>
                    </select>
                    <div className="input-group-append">
                        *
                    </div>
                </div>
                <span className="llu-span_form_right">***</span>
                {/*Edad*/}
                <label htmlFor="basic-url">¿Qué otros idiomas hablas? (opcional)</label>
                <div className="input-group container">
                    <div className="input-group-prepend">
                        <LluIcon className="fa fa-globe"/>
                    </div>
                    <div style={{
                        display: "inline-flex",
                        marginBottom: "10px"
                    }}>
                        <select defaultValue="Idioma" type="select" className="llu-input_form col-lg-10 select">
                            <option disabled>Idioma</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                            <option>Otro</option>
                        </select>
                        <span
                            className="input-group-addon"
                            style={{width: 0, paddingLeft: 0, paddingRight: 0, border: "none"}}/>
                        <select defaultValue="Nivel" type="select" className="llu-input_form col-lg-10 select">
                            <option disabled>Nivel</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                            <option>Otro</option>
                        </select>
                    </div>
                </div>
                <span className="llu-span_form_right">Selecciona el idioma y nivel de dominio</span>
            </div>,
            <div key="button_next" className="col-12 text-center">
                <LluButton action={this.props.closeModal} className="btn" style={{color: "#ffb400",
                    background: "transparent",
                    border: "2px solid #ffb400", marginRight: "5px"}}>{"<<Volver"}</LluButton>
                <LluModalRegisterParentStep3/>
            </div>,
            <hr key="separatpr"/>,
            <div id="login_form" key="login" className="col-12 text-center">
                <p>Ya tengo una cuenta en Lluqi, quiero <span>Iniciar sesión</span></p>
            </div>


        ]
    }
}

export default LluFormStep2;