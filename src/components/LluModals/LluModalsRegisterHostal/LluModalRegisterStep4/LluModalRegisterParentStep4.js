import React from 'react';
import LluComponent from "../../../LluComponents/LluCommon/LluComponent";
import LluModalRegisterStep4 from "./LluModalRegisterStep4";
import LluButton from "../../../LluComponents/LluCommon/LluButton/LluButton";

class LluModalRegisterParentStep4 extends LluComponent {
    render() {
        return [
            <LluButton key="llu-modal_register_button" action={this.openModal} className="btn btn-primary shadow">
                Siguiente >>
            </LluButton>,
            <LluModalRegisterStep4 key="llu-modal_register" isOpen={this.state.modalIsOpen}
                                   isOpenClass={this.state.isOpenClass} directionLeft={true}
                                   closeModal={this.closeModal}/>
        ]
    }
}

export default LluModalRegisterParentStep4;