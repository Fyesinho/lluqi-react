import React from 'react';
import LluComponent from "../../../LluComponents/LluCommon/LluComponent";
import LluModalRegisterStep3 from "./LluModalRegisterStep3";
import LluButton from "../../../LluComponents/LluCommon/LluButton/LluButton";

class LluModalRegisterParentStep3 extends LluComponent {
    render() {
        return [
            <LluButton key="llu-modal_register_button" action={this.openModal} className="btn btn-primary shadow">
                Siguiente >>
            </LluButton>,
            <LluModalRegisterStep3 key="llu-modal_register" isOpen={this.state.modalIsOpen}
                                   isOpenClass={this.state.isOpenClass} directionLeft={true}
                                   closeModal={this.closeModal}/>
        ]
    }
}

export default LluModalRegisterParentStep3;