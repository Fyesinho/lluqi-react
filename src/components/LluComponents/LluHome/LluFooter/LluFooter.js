import React, {Component} from 'react';
import './LluFooter.css';
import LluAnchor from "../../LluCommon/LluAnchor/LluAnchor";

class LluFooter extends Component {
    render() {
        return (
            <footer className="footer llu-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h6>CONTÁCTANOS</h6>
                            <ul>
                                <li>Direccion 1, Santiago de Chile</li>
                                <li>somos@lluqi.com</li>
                                <li>+56912345678</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>SOBRE NOSOTROS</h6>
                            <ul>
                                <li><LluAnchor>QUIENES SOMOS</LluAnchor></li>
                                <li><LluAnchor>COMO FUNCIONA</LluAnchor></li>
                                <li><LluAnchor>PRENSA</LluAnchor></li>
                                <li><LluAnchor>BLOG</LluAnchor></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>VIAJEROS</h6>
                            <ul>
                                <li><LluAnchor>AYUDA</LluAnchor></li>
                                <li><LluAnchor>FAQ</LluAnchor></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>RECINTOS</h6>
                            <ul>
                                <li><LluAnchor>AYUDA</LluAnchor></li>
                                <li><LluAnchor>FAQ</LluAnchor></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>SOPORTE</h6>
                            <ul>
                                <li><LluAnchor>AYUDA</LluAnchor></li>
                                <li><LluAnchor>FAQ</LluAnchor></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default LluFooter;