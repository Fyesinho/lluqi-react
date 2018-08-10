import React from 'react';
import LluComponent from "../../LluComponents/LluCommon/LluComponent";
import LluButton from "../../LluComponents/LluCommon/LluButton/LluButton";
import LluModal from "../../LluComponents/LluCommon/LluModal/LluModal";
import LluAnchor from "../../LluComponents/LluCommon/LluAnchor/LluAnchor";
import LluIcon from "../../LluComponents/LluCommon/LluIcon/LluIcon";
import LluLogo from "../../LluComponents/LluCommon/LluMainHeader/LluLogo/LluLogo";
//Assets
import './LluModalSelectRegister.css';
import hostal from '../../../assets/images/perfil_hostal.PNG';
import viajero from '../../../assets/images/perfil_viajero.PNG';

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
                <div className="text-center pt-4 container">
                    <LluLogo/><span onClick={this.closeModal}><LluIcon className="fas fa-times float-right"/></span>
                </div>
                <hr style={{width: '60%'}}/>
                <h3 className="text-center pt-4">Registro de Usuario</h3>
                <p className="text-center">¿Cuál perfil quieres crear?</p>
                <div className="row pt-4 m-auto">
                    <LluAnchor className="col-6 text-center" action={this.openRegisterTraveler}>
                        <img src={viajero} alt="" /><p>Viajero</p></LluAnchor>
                    <LluAnchor className="col-6 text-center" action={this.openRegisterHostel}>
                        <img src={hostal} alt="" /><p>Hostal</p></LluAnchor>
                </div>
            </LluModal>
        ]
    }
}

export default LluModalsSelectRegister;