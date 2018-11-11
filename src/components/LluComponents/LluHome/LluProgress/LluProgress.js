import React, {Component} from 'react';
import {connect} from 'react-redux';
import './LluProgress.css';
import {openModalRegisterTravelerTwo} from '../../../redux/modules/modal_register_traveler/modal_register_traveler_step2';
import LluModalRegisterStep2
    from '../../../LluModals/LluModalsRegisterTraveler/LluModalRegisterStep2/LluModalRegisterStep2';
import LluModalRegisterStep3
    from '../../../LluModals/LluModalsRegisterTraveler/LluModalRegisterStep3/LluModalRegisterStep3';
import {openModalRegisterTravelerThree} from '../../../redux/modules/modal_register_traveler/modal_register_traveler_step3';

class LluProgress extends Component {
    render() {

        const style = {
            marginTop: 10,
            background: '#ffb400',
            color: 'white',
            height: 44
        };

        const {openModalTwo, openModalThree} = this.props;
        const user = JSON.parse(sessionStorage.getItem('user'));
        return(
            <div style={{marginTop: 75, textAlign: 'center', background: '#00b195'}}>
                <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{marginBottom: 0, background: '#00b195', color: 'white', fontSize:16}}>
                    <strong>Hola {user.name}</strong> Aún faltan algunos pasos por terminar.<br/>
                    <button type='button' onClick={openModalTwo} className='btn btn-success' style={{padding: 10, margin: 5, color: 'black', ...style}}>Cuales son tus idiomas</button>
                    <LluModalRegisterStep2/>
                    <button type='button' onClick={openModalThree} className='btn btn-success' style={{padding: 10, margin: 5, color: 'black', ...style}}>Cuales son tus habilidades</button>
                    <LluModalRegisterStep3/>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    openModalTwo: payload => dispatch(openModalRegisterTravelerTwo(payload)),
    openModalThree: payload => dispatch(openModalRegisterTravelerThree(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LluProgress);