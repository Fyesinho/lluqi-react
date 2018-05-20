import React from 'react';
import LluComponent from "../../LluComponents/LluCommon/LluComponent";
import LluButton from "../../LluComponents/LluCommon/LluButton/LluButton";
import LluModal from "../../LluComponents/LluCommon/LluModal/LluModal";
import LluAnchor from "../../LluComponents/LluCommon/LluAnchor/LluAnchor";
import LluLogo from "../../LluComponents/LluCommon/LluMainHeader/LluLogo/LluLogo";
//Assets
import './LluModalSelectRegister.css';

class LluModalsSelectRegister extends LluComponent {
    constructor() {
        super();
        this.openRegisterTraveler = this.openRegisterTraveler.bind(this);
        this.openRegisterHostel = this.openRegisterHostel.bind(this);
    }

    openRegisterTraveler() {
        const traveler = document.getElementById("register_traveler");
        traveler.click();
        this.closeModal();
    }

    openRegisterHostel() {
        const hostel = document.getElementById("register_hostel");
        hostel.click();
        this.closeModal();
    }

    render() {
        return [
            <LluButton
                key="llu-modal_select_register_button"
                action={this.openModal}
                className="btn btn-primary shadow">
                ¡Tengo recinto!
            </LluButton>,
            <LluModal
                key="llu-modal_select"
                directionLeft={true}
                close={this.closeModal}
                className="llu-container llu-half_modal"
                isOpenClass={this.state.isOpenClass}
                isOpen={this.state.modalIsOpen}>
                <div className="text-center pt-4">
                    <LluLogo/>
                </div>
                <h3 className="text-center pt-4">Registro de Usuario</h3>
                <p className="text-center">¿Cuál perfil quieres crear?</p>
                <div className="row pt-4">
                    <LluAnchor className="col-5 text-center" action={this.openRegisterTraveler}>viajero</LluAnchor>
                    <LluAnchor className="col-5 text-center" action={this.openRegisterHostel}>hotel</LluAnchor>
                </div>
            </LluModal>
        ]
    }
}

export default LluModalsSelectRegister;