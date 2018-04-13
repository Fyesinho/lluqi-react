import React from 'react';
import LluComponent from "../../LluComponents/LluCommon/LluComponent";
import LluModal from "../../LluComponents/LluCommon/LluModal/LluModal";
import LluModalImageForm from "../LluModalImageForm/LluModalImageForm";
import LluFormStep1 from "../../LluComponents/LluCommon/LluFormStep1/LluFormStep1";

class LluModalRegister extends LluComponent {
    render() {
        return (
            <LluModal directionLeft={this.props.directionLeft} className="llu-container"
                      isOpenClass={this.props.isOpenClass}
                      isOpen={this.props.isOpen}>
                <div className="row" style={{marginLeft: 0, marginRight: 0}}>
                    <div className="col-6">
                        <div className="llu-gradient">
                            <LluFormStep1/>
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