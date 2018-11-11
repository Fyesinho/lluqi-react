import React from 'react';
import LluComponent from "../../../LluComponents/LluCommon/LluComponent";
import LluModal from "../../../LluComponents/LluCommon/LluModal/LluModal";
import LluModalImageForm from "../LluModalImageForm/LluModalImageForm";
import LluFormStep2 from "../../../LluComponents/LluCommon/LluFormStep2/LluFormStep2";
import {connect} from 'react-redux';
import LluLogo from "../../../LluComponents/LluCommon/LluMainHeader/LluLogo/LluLogo";
import {closeModalRegisterTravelerTwo} from '../../../redux/modules/modal_register_traveler/modal_register_traveler_step2';

class LluModalRegisterStep2 extends LluComponent {
    render() {
        const {modal_is_open, is_open_class, closeModal} = this.props;
        return (
            <LluModal directionLeft={true} className="llu-container"
                      onRequestClose={closeModal}
                      isOpenClass={is_open_class}
                      isOpen={modal_is_open}>
                <div className="row" style={{marginLeft: 0, marginRight: 0}}>
                    <div className="col-6">
                        <div className="llu-gradient">
                            <div key="header" className="llu-header_form">
                                <LluLogo/>
                                <h2>Completa tu información de viajero</h2>
                            </div>
                            <div key="body" className="llu-body_form">
                                <div className="llu-gradient"/>
                                <LluFormStep2 closeModal={closeModal}/>
                            </div>
                            <hr/>
                            <div id="login_form" key="login" className="col-12 text-center">
                                <p>Ya tengo una cuenta en Lluqi, quiero <span>Iniciar sesión</span></p>
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
    const {modalRegisterTravelerTwo} = state;
    return modalRegisterTravelerTwo;
};

const mapDispatchToProps = dispatch => ({
   closeModal: payload => dispatch(closeModalRegisterTravelerTwo(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LluModalRegisterStep2);