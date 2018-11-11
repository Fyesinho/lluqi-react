import React from 'react';//Assets
import './LluFormStep3.css';
import LluButton from "../LluButton/LluButton";
import LluComponent from "../LluComponent";
import LluIconSelect from "../LluIconSelect/LluIconSelect";

class LluFormStep3 extends LluComponent {
    render() {
        return (
            <form className='container'>
                <h6 className='text-center'>Selecciona las tareas que estarías dispuesto a hacer</h6>
                <div className='text-center mb-4'>Tareas Básicas</div>
                <div className="input-group container">
                    <ul style={{width: '100%', webkitPaddingStart: 0}}>
                        <LluIconSelect className="pointer fas fa-h-square">Recepción</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-trash-alt">Limpieza</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-wrench">Mantención</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%', webkitPaddingStart: 0}}>
                        <LluIconSelect className="pointer fas fa-user-plus">Social Media</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-utensils">Junior en la cocina</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-glass-martini">Mesero/Copero</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%', webkitPaddingStart: 0}}>
                        <LluIconSelect className="pointer fas fa-chart-line">Administración</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-smile">Promotor de fiestas</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-leaf">Jardinería</LluIconSelect>
                    </ul>
                </div>
                <hr style={{marginBottom: 0, marginTop: 0, width: '70%'}}/>
                <div className='text-center mb-4 mt-4'>Tareas Específicas</div>
                <div className="input-group container">
                    <ul style={{width: '100%', webkitPaddingStart: 0}}>
                        <LluIconSelect className="pointer fas fa-laptop">Desarrollo Web/Blog</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-briefcase">Asesoría Contable</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-language">Lecciones de idioma</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%', webkitPaddingStart: 0}}>
                        <LluIconSelect className="pointer fas fa-music">Artistas (cantantes, bailarines)</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-paint-brush">Artes (pintores profesionales /
                            dibujantes)</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-camera">Fotografía</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%', webkitPaddingStart: 0}}>
                        <LluIconSelect className="pointer fas fa-map">Guía Turistico</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-video">Producción de videos</LluIconSelect>
                        <LluIconSelect className="pointer fas fa-moon">Turnos nocturnos</LluIconSelect>
                    </ul>
                </div>
                <div key="button_next" className="col-12 text-center">
                    <LluButton key="llu-modal_register_button"
                               className="btn btn-primary shadow">
                        Aceptar
                    </LluButton>
                </div>

            </form>
        );
    }
}

export default LluFormStep3;