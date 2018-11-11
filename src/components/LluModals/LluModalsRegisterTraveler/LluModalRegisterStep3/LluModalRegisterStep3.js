import React from 'react';
import LluComponent from "../../../LluComponents/LluCommon/LluComponent";
import LluModal from "../../../LluComponents/LluCommon/LluModal/LluModal";
import LluModalImageForm from "../LluModalImageForm/LluModalImageForm";
import LluFormStep3 from "../../../LluComponents/LluCommon/LluFormStep3/LluFormStep3";
import {connect} from 'react-redux';
import {closeModalRegisterTravelerThree} from '../../../redux/modules/modal_register_traveler/modal_register_traveler_step3';
import LluLogo from '../../../LluComponents/LluCommon/LluMainHeader/LluLogo/LluLogo';

class LluModalRegisterStep3 extends LluComponent {
    render() {
        const {modal_is_open, is_open_class, closeModal} = this.props;
        return (
            <LluModal directionLeft={true} className="llu-container"
                      isOpenClass={is_open_class}
                      onRequestClose={closeModal}
                      isOpen={modal_is_open}>
                <div className="row" style={{marginLeft: 0, marginRight: 0}}>
                    <div className="col-6">
                        <div className="llu-gradient">
                            <div key="header" className="llu-header_form">
                                <LluLogo/>
                                <h2>Completa tu cuenta de viajero</h2>
                            </div>
                            <div key="body" className="llu-body_form">
                                <div className="llu-gradient"/>
                                    <LluFormStep3 closeModal={this.props.closeModal}/>
                            </div>
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

const mapStateToProps = state => {
    const {modalRegisterTravelerThree} = state;
    return modalRegisterTravelerThree;
};

const mapDispatchToProps = dispatch => ({
    closeModal: payload => dispatch(closeModalRegisterTravelerThree(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LluModalRegisterStep3);