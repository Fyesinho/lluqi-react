import React from 'react';
import LluModal from "../../../LluComponents/LluCommon/LluModal/LluModal";
import LluModalImageForm from "../LluModalImageForm/LluModalImageForm";
import LluFormStep1 from "../../../LluComponents/LluCommon/LluFormStep1/LluFormStep1";
import LluLogo from "../../../LluComponents/LluCommon/LluMainHeader/LluLogo/LluLogo";
import {connect} from 'react-redux';
import {closeModalRegisterTravelerOne} from "../../../redux/modules/modal_register_traveler/modal_register_traveler";

const LluModalRegister = props => {
    const {is_open_class, modal_is_open, closeModal} = props;
    return <LluModal
        directionLeft={true}
        className="llu-container"
        onRequestClose={closeModal}
        isOpenClass={is_open_class}
        isOpen={modal_is_open}>
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
                <LluModalImageForm closeModal={closeModal}/>
            </div>
        </div>
    </LluModal>
};

const mapStateToProps = state => {
    const {modalRegisterTraveler} = state;
    return modalRegisterTraveler;
};

const mapDispatchToProps = disptach => ({
    closeModal: payload => disptach(closeModalRegisterTravelerOne(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LluModalRegister);