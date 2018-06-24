import React, {Component} from 'react';

import './LluFeedback.css';

class LluFeedback extends Component {
    render() {
        return (
            <div className="llu-feedback_ container">
                <div className="row pb-4">
                    <div className="col-2 text-center">
                        <img
                            src="https://secure.gravatar.com/avatar/523253cf254ea05c3c81da5b2448724b?s=400&d=mm&r=g"
                            alt="profile"/>
                        <p>Opiniones: 2</p>
                        <p>Votos: 2</p>
                    </div>
                    <div className="col-10">
                        <div className="row mt-1">
                            <p className="col-12 title_feedback">Rodrigo Gonzalez</p>
                        </div>
                        <div className="row ">
                            <p className="col-12">Viajero - Registrado desde 15 de Mayo de 2015</p>
                        </div>
                        <div className="row">
                            <p className="col-9 mt-3">Lorem ipsum dolor sit amet,
                                consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.</p>
                        </div>
                        <div className="row mt-3">
                            <p className="col-12">26 de Noviembre de 2017</p>
                        </div>
                    </div>
                </div>
                <div className="row border_feed">
                    <div className="col-10 text-right">
                        <div className="row mt-1">
                            <p className="col-12 title_feedback">Rodrigo Gonzalez</p>
                        </div>
                        <div className="row ">
                            <p className="col-12">Viajero - Registrado desde 15 de Mayo de 2015</p>
                        </div>
                        <div className="row">
                            <p className="col-12 mt-3">Lorem ipsum dolor sit amet,
                                consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.</p>
                        </div>
                        <div className="row mt-3">
                            <p className="col-12">26 de Noviembre de 2017</p>
                        </div>
                    </div>
                    <div className="col-2 text-center">
                        <img
                            src="https://secure.gravatar.com/avatar/523253cf254ea05c3c81da5b2448724b?s=400&d=mm&r=g"
                            alt="profile"/>
                        <p>Opiniones: 2</p>
                        <p>Votos: 2</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LluFeedback;
