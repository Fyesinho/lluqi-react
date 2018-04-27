import React, {Component} from 'react';
import LluLogo from "../LluMainHeader/LluLogo/LluLogo";
//Assets
import './LluFormStep1.css'
import LluIcon from "../LluIcon/LluIcon";
import LluModalRegisterParentStep2 from "../../../LluModals/LluModalsRegisterTraveler/LluModalRegisterStep2/LluModalRegisterParentStep2";

class LluFormStep1 extends Component {
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
                <label htmlFor="basic-url">Tu correo electrónico</label>
                <div className="input-group container">
                    <div className="input-group-prepend">
                        <LluIcon className="fas fa-envelope"/>
                    </div>
                    <input placeholder="correo@gmail.com" type="text" className="llu-input_form"/>
                    <div className="input-group-append">
                        *
                    </div>
                </div>
                <span className="llu-span_form_right">Este correo quedará asociado a tu cuenta en Lluqi.com</span>
                {/*Nombre y Apellido*/}
                <label htmlFor="basic-url">Tu nombre y apellido</label>
                <div className="input-group container">
                    <div className="input-group-prepend">
                        <LluIcon className="fas fa-user"/>
                    </div>
                    <input placeholder="Nombre Apellido" type="text" className="llu-input_form"/>
                    <div className="input-group-append">
                        *
                    </div>
                </div>
                <span className="llu-span_form_right">Así será identificado en Lluqi.com</span>
                {/*Genero*/}
                <label htmlFor="basic-url">Soy...</label>
                <div className="input-group container">
                    <div className="input-group-prepend">
                        <LluIcon className="fa fa-transgender"/>
                    </div>
                    <select defaultValue="Sexo" type="select" className="llu-input_form">
                        <option disabled>Sexo</option>
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
                <label htmlFor="basic-url">Fecha de nacimiento</label>
                <div className="input-group container">
                    <div className="input-group-prepend">
                        <LluIcon className="fa fa-gift"/>
                    </div>
                    <div className="d-lg-inline-flex">
                        <select defaultValue="Año" type="select" className="llu-input_form col-4 select">
                            <option disabled>Año</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                            <option>Otro</option>
                        </select>
                        <select defaultValue="Día" type="select" className="llu-input_form col-4 select">
                            <option disabled>Día</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                            <option>Otro</option>
                        </select>
                        <select defaultValue="Mes" type="select" className="llu-input_form col-4 select">
                            <option disabled>Mes</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                            <option>Otro</option>
                        </select>
                        <div className="input-group-append">
                            *
                        </div>
                    </div>
                </div>
                <span className="llu-span_form_right">Debes ser mayor de edad para crear una cuenta</span>
                {/*Contraseña*/}
                <label htmlFor="basic-url">Elige una contraseña</label>
                <div className="input-group container">
                    <div className="input-group-prepend">
                        <LluIcon className="fa fa-key"/>
                    </div>
                    <input placeholder="********" type="password" className="llu-input_form"/>
                    <div className="input-group-append">
                        *
                    </div>
                </div>

                <span className="llu-span_form_right">La contraseña debe tener al menos 8 caracteres</span>
                {/*Contraseña*/}
                <label htmlFor="basic-url">Número móvil</label>
                <div className="input-group container">
                    <div className="input-group-prepend">
                        <LluIcon className="fa fa-mobile"/>
                    </div>
                    <input placeholder="+569-12345678" type="phone" className="llu-input_form"/>
                    <div className="input-group-append">
                        *
                    </div>
                </div>
                <span className="llu-span_form_right">***</span>
                {/*Aceptar*/}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </p>
                <div className="row">
                    <span className="checkbox-inline col-12"><input type="checkbox" value=""/>Lorem ipsum dolor sit amet,
                    consectetur</span>
                </div>
            </div>,
            <div key="button_next" className="col-12 text-center">
                <LluModalRegisterParentStep2/>
            </div>,
            <hr key="separatpr"/>,
            <div id="login_form" key="login" className="col-12 text-center">
                <p>Ya tengo una cuenta en Lluqi, quiero <span>Iniciar sesión</span></p>
            </div>


        ]
    }
}

export default LluFormStep1;