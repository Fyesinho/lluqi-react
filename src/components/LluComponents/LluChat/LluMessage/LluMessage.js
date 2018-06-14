import React, {Component} from 'react';
import LluIcon from '../../LluCommon/LluIcon/LluIcon';
import './LluMessage.css';

class LluMessage extends Component {
    render() {
        return (
            <div className="col-8" style={{padding: 0}}>
                <div className="llu-message pt-3 pb-3">
                    <div className="row">
                        <div className="col-2">
                            <img className="float-right"
                                 src="https://secure.gravatar.com/avatar/523253cf254ea05c3c81da5b2448724b?s=400&d=mm&r=g"
                                 alt="profile"/>
                        </div>
                        <div className="col-8">
                            <div className="row mt-1">
                                <p className="col-9 title-menu-user">Rodrigo Gonzalez</p>
                            </div>
                            <div className="row">
                                <p className="col-10 resume">Viajero</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <LluIcon className="fas fa-info-circle text-center"/>
                        </div>
                    </div>
                </div>
                <div className="llu-message-date">
                    12 de enero de 2017
                </div>
                <hr className="hr_message"/>
                <div className="llu-message-content">

                </div>
                <div className="llu-write row">
                    <div className="col-2"><LluIcon className={'fas fa-paperclip'}/></div>
                    <div className="col-8">Escribe tu mensaje aquí...</div>
                    <div className="col-2"><LluIcon className={'fas fa-paper-plane'}/></div>
                </div>
            </div>
        );
    }
}

export default LluMessage;