import React from 'react';
import LluComponent from "../../../LluComponents/LluCommon/LluComponent";
import LluModalRegister from "./LluModalRegister";
import LluAnchor from "../../../LluComponents/LluCommon/LluAnchor/LluAnchor";

class LluModalRegisterParent extends LluComponent {
    render() {
        return [
            <LluAnchor id="register_traveler" key="llu-modal_register_anchor" action={this.openModal}>¡Quiero Viajar!</LluAnchor>,
            <LluModalRegister key="llu-modal_register" isOpen={this.state.modalIsOpen}
                              isOpenClass={this.state.isOpenClass} directionLeft={true}
                              closeModal={this.closeModal}/>
        ]
    }
}

export default LluModalRegisterParent;