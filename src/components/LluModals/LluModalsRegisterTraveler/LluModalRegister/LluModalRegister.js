import React from 'react';
import LluComponent from "../../../LluComponents/LluCommon/LluComponent";
import LluModal from "../../../LluComponents/LluCommon/LluModal/LluModal";
import LluModalImageForm from "../LluModalImageForm/LluModalImageForm";
import LluFormStep1 from "../../../LluComponents/LluCommon/LluFormStep1/LluFormStep1";
import LluLogo from "../../../LluComponents/LluCommon/LluMainHeader/LluLogo/LluLogo";
import LluModalRegisterParentStep2 from "../LluModalRegisterStep2/LluModalRegisterParentStep2";

class LluModalRegister extends LluComponent {
    render() {
        return (
            <LluModal directionLeft={this.props.directionLeft} className="llu-container"
                      isOpenClass={this.props.isOpenClass}
                      isOpen={this.props.isOpen}>
                <div className="row" style={{marginLeft: 0, marginRight: 0}}>
                    <div className="col-6">
                        <div className="llu-gradient">
                            <div key="header" className="llu-header_form">
                                <LluLogo/>
                                <h2>Crear cuenta para Viajero</h2>
                                <p>Aún puedes registrarte con Facebook o Google o crear una cuenta para hostal</p>
                            </div>
                            <div key="body" className="llu-body_form">
                                <div className="llu-gradient"/>
                                <LluFormStep1/>
                            </div>
                            <hr key="separatpr"/>
                            <div id="login_form" key="login" className="col-12 text-center">
                                <p>Ya tengo una cuenta en Lluqi, quiero <span>Iniciar sesión</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <LluModalImageForm closeModal={this.props.closeModal}/>
                    </div>
                </div>
            </LluModal>
        )
    }
}

export default LluModalRegister;