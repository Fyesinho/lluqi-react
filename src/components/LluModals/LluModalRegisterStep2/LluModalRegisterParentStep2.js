import React from 'react';
import LluComponent from "../../LluComponents/LluCommon/LluComponent";
import LluModalRegisterStep2 from "./LluModalRegisterStep2";
import LluButton from "../../LluComponents/LluCommon/LluButton/LluButton";

class LluModalRegisterParentStep2 extends LluComponent {
    render() {
        return [
            <LluButton key="llu-modal_register_button" action={this.openModal} className="btn btn-primary shadow">
                Siguiente >>
            </LluButton>,
            <LluModalRegisterStep2 key="llu-modal_register" isOpen={this.state.modalIsOpen}
                                   isOpenClass={this.state.isOpenClass} directionLeft={true}
                                   closeModal={this.closeModal}/>
        ]
    }
}

export default LluModalRegisterParentStep2;