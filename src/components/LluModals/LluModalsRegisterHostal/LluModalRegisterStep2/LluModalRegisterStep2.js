import React from 'react';
import LluComponent from "../../../LluComponents/LluCommon/LluComponent";
import LluModal from "../../../LluComponents/LluCommon/LluModal/LluModal";
import LluFormHostalStep2 from "../../../LluComponents/LluCommon/LluFormHostalStep2/LluFormHostalStep2";

class LluModalRegisterStep2 extends LluComponent {
    render() {
        return (
            <LluModal directionLeft={this.props.directionLeft} className="llu-container"
                      isOpenClass={this.props.isOpenClass}
                      isOpen={this.props.isOpen}>
                <LluFormHostalStep2 closeModal={this.props.closeModal}/>
            </LluModal>
        )
    }
}

export default LluModalRegisterStep2;