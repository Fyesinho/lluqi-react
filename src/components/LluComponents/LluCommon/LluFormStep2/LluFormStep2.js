import React from 'react';
//Assets
import './LluFormStep2.css';
import LluButton from "../LluButton/LluButton";
import LluComponent from "../LluComponent";
import LluFieldSelect from "../LluFieldSelect/LluFieldSelect";
import {Field, reduxForm} from "redux-form";
import LluField from "../LluField/LluField";

const campos = [
    {
        title: '¿En qué país naciste?',
        icon: 'fa fa-map-marker',
        options: ['País', 'Chile', 'Argentina', 'Perú'],
        subtitle: 'Muchos hostales le dan importancia a la diversidad cultural',
    },
    {
        title: '¿En qué ciudad resides actualmente?',
        icon: 'fa fa-street-view',
        placeholder: 'Santiago, Chile',
        subtitle: '***',
        type: 'text'
    },
    {
        title: '¿Cuál es tu idioma nativo?',
        icon: 'fa fa-globe',
        options: ['Idioma', 'Idioma 1', 'Idioma 2', 'Idioma 3'],
        subtitle: '***'
    },
    {
        title: '¿Qué otros idiomas hablas? (opcional)',
        icon: 'fa fa-globe',
        options: ['Idioma', 'Idioma 1', 'Idioma 2', 'Idioma 3'],
        subtitle: 'Selecciona el idioma y dominio',
    }
];

class LluFormStep2 extends LluComponent {
    render() {
        return (
            <form style={{padding: '0 35px', maxWidth: 490, margin: 'auto'}}>
                <Field name='pais' fields={campos[0]} component={LluFieldSelect}/>
                <Field name='ciudad' fields={campos[1]} component={LluField}/>
                <Field name='idioma' fields={campos[2]} component={LluFieldSelect}/>
                <Field name='idiomas' fields={campos[3]} component={LluFieldSelect}/>
                <div key="button_next" className="col-12 text-center">
                    <LluButton key="llu-modal_register_button" action={this.openModal}
                               className="btn btn-primary shadow">
                        Aceptar
                    </LluButton>
                </div>
            </form>
        );
    }
}

LluFormStep2 = reduxForm({
    form: 'register_traveler_languaje',
    // validate,
    destroyOnUnmount: false
})(LluFormStep2);


export default LluFormStep2;