import React from 'react';
import LluComponent from "../../LluComponents/LluCommon/LluComponent";
import LluAnchor from "../../LluComponents/LluCommon/LluAnchor/LluAnchor";
import LluLogo from "../../LluComponents/LluCommon/LluMainHeader/LluLogo/LluLogo";
import LluModal from "../../LluComponents/LluCommon/LluModal/LluModal";
import LluIcon from "../../LluComponents/LluCommon/LluIcon/LluIcon";

import './LluModalsLogin.css';
import LluButton from "../../LluComponents/LluCommon/LluButton/LluButton";

class LluModalsLogin extends LluComponent {
    constructor() {
        super();
        this.openRegisterTraveler = this.openRegisterTraveler.bind(this);
        this.validateField = this.validateField.bind(this);
        this.buttonLogin = this.buttonLogin.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.state = {
            disable: true,
            email: '',
            password: ''
        };
        this.email_loginValid = false;
        this.password_loginValid = false;
    }

    openRegisterTraveler() {
        const traveler = document.getElementById("register_traveler");
        traveler.click();
        this.closeModal();
    }

    validateField(target) {
        let isValid = false;
        switch (target.id) {
            case 'email_login':
                isValid = target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                break;
            case 'password_login':
                isValid = target.value.length > 6;
                break;
            default:
                break;
        }
        // isValid ? target.style.border = "1px solid green" : target.style.border = "1px solid rgb(245, 80, 101)";
        isValid ? this[target.id + "Valid"] = true : this[target.id + "Valid"] = false;
        this.buttonLogin();
    }

    setEmail({target}) {
        this.setState({
            email: target.value
        });
        this.validateField(target);
    }

    setPassword({target}) {
        this.setState({
            password: target.value
        });
        this.validateField(target);
    }

    buttonLogin() {
        this.setState({
            disable: !(this.email_loginValid && this.password_loginValid)
        });
    }

    submitLogin() {
        sessionStorage.setItem('user', this.state.email);
        sessionStorage.setItem('type', 'traveler');
        window.location.reload();
    }

    render() {
        return [
            <LluAnchor key="llu-anchor_login" className="enfasis" action={this.openModal}>
                Iniciar Sesión
            </LluAnchor>,
            <LluModal
                close={this.closeModal}
                key="llu-modal_select"
                directionLeft={true}
                className="llu-container llu-half_modal"
                isOpenClass={this.state.isOpenClass}
                isOpen={this.state.modalIsOpen}>
                <div className="llu-container">
                    <div className="text-center pt-4">
                        <LluLogo/>
                    </div>
                    <h3 className="pt-4 text-center">Bienvenido a Lluqi.com</h3>
                    <p className="text-center">Puedes iniciar sesión con Facebook, Google o tu cuenta de Lluqi</p>
                    <hr/>
                    <div className="container">
                        <div className="llu-body_form_login row">
                            <p className="label_login" htmlFor="basic-url">Mi email</p>
                            <div className="input-group container">
                                <div className="input-group-prepend">
                                    <LluIcon className="fas fa-envelope"/>
                                </div>
                                <input id="email_login" onChange={this.setEmail} placeholder="correo@gmail.com"
                                       type="text"
                                       className="llu-input_form"/>
                            </div>
                            <p className="label_login" htmlFor="basic-url">Mi contraseña</p>
                            <div className="input-group container">
                                <div className="input-group-prepend">
                                    <LluIcon className="fas fa-key"/>
                                </div>
                                <input id="password_login" onChange={this.setPassword} placeholder="******"
                                       type="password" className="llu-input_form"/>
                            </div>
                        </div>
                        <div className="text-right forgot_password">Olvidé mi contraseña</div>
                        <div className="llu-body_form_login text-center">
                            <LluButton
                                disabled={this.state.disable}
                                action={this.submitLogin}
                                className="button_login btn btn-primary shadow">
                                Ingresar
                            </LluButton>
                        </div>
                    </div>
                    <hr/>
                    <p className="text-center register_by_login">No me he registrado aún, ¡quiero <span
                        onClick={this.openRegisterTraveler}>Registrarme</span> ahora!</p>
                </div>
            </LluModal>
        ]
    }
}

export default LluModalsLogin;