import React from 'react';
import LluLogo from "../LluMainHeader/LluLogo/LluLogo";
//Assets
import './LluFormStep3.css'
import LluButton from "../LluButton/LluButton";
import LluComponent from "../LluComponent";
import LluIconSelect from "../LluIconSelect/LluIconSelect";

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
                        <LluIconSelect className="pointer fas fa-h-square">Recepción</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-trash-alt">Limpieza</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-wrench">Mantención</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <LluIconSelect className="pointer fas fa-user-plus">Social Media</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-utensils">Junior en la cocina</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-glass-martini">Mesero/Copero</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <LluIconSelect className="pointer fas fa-chart-line">Administración</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-smile">Promotor de fiestas</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-leaf">Jardinería</LluIconSelect>
                    </ul>
                </div>
                <hr style={{marginBottom: 0, marginTop: 0, width: '70%'}}/>
                <label htmlFor="basic-url">Tareas Específicas</label>
                <div className="input-group container">
                    <ul style={{width: '100%'}}>
                        <LluIconSelect className="pointer fas fa-laptop">Desarrollo Web/Blog</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-briefcase">Asesoría Contable</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-language">Lecciones de idioma</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <LluIconSelect className="pointer fas fa-music">Artistas (cantantes, bailarines)</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-paint-brush">Artes (pintores profesionales /
                            dibujantes)</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-camera">Fotografía</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <LluIconSelect className="pointer fas fa-map">Guía Turistico</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-video">Producción de videos</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-moon">Turnos nocturnos</LluIconSelect>
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