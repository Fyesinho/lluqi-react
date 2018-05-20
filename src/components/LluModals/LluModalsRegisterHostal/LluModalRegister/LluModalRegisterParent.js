import React from 'react';
import LluComponent from "../../../LluComponents/LluCommon/LluComponent";
import LluModalRegister from "./LluModalRegister";
import LluAnchor from "../../../LluComponents/LluCommon/LluAnchor/LluAnchor";

class LluModalRegisterParent extends LluComponent {
    render() {
        return [
            <LluAnchor id="register_hostel" key="llu-modal_register_anchor" action={this.openModal}>¡Tengo recinto!</LluAnchor>,
            <LluModalRegister key="llu-modal_register" isOpen={this.state.modalIsOpen}
                              isOpenClass={this.state.isOpenClass} directionLeft={true}
                              closeModal={this.closeModal}/>
        ]
    }
}

export default LluModalRegisterParent;