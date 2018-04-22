import React from 'react';
import LluComponent from "../../../LluComponents/LluCommon/LluComponent";
import LluModal from "../../../LluComponents/LluCommon/LluModal/LluModal";
import LluModalImageFormHostel from "../LluModalImageFormHostel/LluModalImageFormHostel";
import LluFormHostalStep1 from "../../../LluComponents/LluCommon/LluFormHostalStep1/LluFormHostalStep1";

class LluModalRegister extends LluComponent {
    render() {
        return (
            <LluModal directionLeft={this.props.directionLeft} className="llu-container"
                      isOpenClass={this.props.isOpenClass}
                      isOpen={this.props.isOpen}>
                <div className="row" style={{marginLeft: 0, marginRight: 0}}>
                    <div className="col-6">
                        <div className="llu-gradient">
                            <LluFormHostalStep1/>
                        </div>
                    </div>
                    <div className="col-6">
                        <LluModalImageFormHostel closeModal={this.props.closeModal}/>
                    </div>
                </div>
            </LluModal>
        )
    }
}

export default LluModalRegister;