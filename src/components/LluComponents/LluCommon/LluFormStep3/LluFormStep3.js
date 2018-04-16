import React from 'react';
import LluLogo from "../LluMainHeader/LluLogo/LluLogo";
//Assets
import './LluFormStep3.css'
import LluIcon from "../LluIcon/LluIcon";
import LluButton from "../LluButton/LluButton";
import LluComponent from "../LluComponent";

class LluFormStep3 extends LluComponent {
    render() {
        return [
            <div key="header" className="llu-header_form">
                <LluLogo/>
                <h2>Crear cuenta para Viajero</h2>
                <p>Aún puedes registrarte con Facebook o Google o crear una cuenta para hostal</p>
            </div>,
            <div key="body" className="llu-body_form">
                <div className="llu-gradient"/>
                {/*Correo*/}
                <label htmlFor="basic-url">Selecciona las tareas que estarías dispuesto a hacer</label>
                <label htmlFor="basic-url">Tareas Básicas</label>
                <div className="input-group container">
                    <ul style={{width: '100%'}}>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-h-square"/><br/>
                            <span className="text-center">Recepción</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-trash-alt"/><br/>
                            <span className="text-center">Limpieza</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-wrench"/><br/>
                            <span className="text-center">Mantención</span>
                        </div>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-user-plus"/><br/>
                            <span className="text-center">Social Media</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-utensils"/><br/>
                            <span className="text-center">Junior en la cocina</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-glass-martini"/><br/>
                            <span className="text-center">Mesero/Copero</span>
                        </div>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-chart-line"/><br/>
                            <span className="text-center">Administración</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer far fa-smile"/><br/>
                            <span className="text-center">Promotor de fiestas</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-leaf"/><br/>
                            <span className="text-center">Jardinería</span>
                        </div>
                    </ul>
                </div>
                <hr style={{marginBottom: 0, marginTop: 0, width: '70%'}}/>
                <label htmlFor="basic-url">Tareas Específicas</label>
                <div className="input-group container">
                    <ul style={{width: '100%'}}>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-laptop"/><br/>
                            <span className="text-center">Desarrollo Web/Blog</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-briefcase"/><br/>
                            <span className="text-center">Asesoría Contable</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-language"/><br/>
                            <span className="text-center">Lecciones de idioma</span>
                        </div>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-music"/><br/>
                            <span className="text-center">Artistas (cantantes, bailarines)</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-paint-brush"/><br/>
                            <span className="text-center">Artes (pintores profesionales / dibujantes)</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-camera"/><br/>
                            <span className="text-center">Fotografía</span>
                        </div>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-map"/><br/>
                            <span className="text-center">Guía Turistico</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-video"/><br/>
                            <span className="text-center">Producción de videos</span>
                        </div>
                        <div className="col-4 text-center float-lg-left">
                            <LluIcon style={{fontSize: "35px"}} className="pointer fas fa-moon"/><br/>
                            <span className="text-center">Turnos nocturnos</span>
                        </div>
                    </ul>
                </div>
            </div>,
            <div key="button_next" className="col-12 text-center">
                <LluButton action={this.props.closeModal} className="btn" style={{
                    color: "#ffb400",
                    background: "transparent",
                    border: "2px solid #ffb400", marginRight: "5px"
                }}>{"<<Volver"}</LluButton>
                <LluButton key="llu-modal_register_button" action={this.closeAll} className="btn btn-primary shadow">
                    Finalizar
                </LluButton>
            </div>,
            <hr key="separatpr"/>,
            <div id="login_form" key="login" className="col-12 text-center">
                <p>Ya tengo una cuenta en Lluqi, quiero <span>Iniciar sesión</span></p>
            </div>


        ]
    }
}

export default LluFormStep3;