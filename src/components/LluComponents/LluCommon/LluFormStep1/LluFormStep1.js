import React from 'react';
import {Field, reduxForm} from 'redux-form';
//Assets
import './LluFormStep1.css'
import LluField from "../LluField/LluField";
import LluFieldSelect from "../LluFieldSelect/LluFieldSelect";
import {setUserRegister} from "../../../redux/modules/user/user";
import {connect} from 'react-redux';

const campos = [
    {
        title: 'Tu correo electrónico',
        icon: 'fas fa-envelope',
        placeholder: 'correo@gmail.com',
        subtitle: 'Este correo quedará asociado a tu cuenta en Lluqi.com',
        type: 'email'
    },
    {
        title: 'Tu nombre y apellido',
        icon: 'fas fa-user',
        placeholder: 'Nombre Apellido',
        subtitle: 'Así será identificado en Lluqi.com',
        type: 'text'
    },
    {
        title: 'Soy...',
        icon: 'fa fa-transgender',
        options: ['Sexo', 'Hombre', 'Mujer', 'Otro'],
        subtitle: 'Es solo para fines analíticos'
    },
    {
        title: 'Elige una contraseña',
        icon: 'fa fa-key',
        placeholder: '********',
        subtitle: 'La contraseña debe tener al menos 8 caracteres',
        type: 'password'
    },
    {
        title: 'Número móvil',
        icon: 'fa fa-mobile',
        placeholder: '+569-12345678',
        subtitle: '***',
        type: 'phone'
    }
];

let LluFormStep1 = ({handleSubmit, addUser}) => {
    return (
        <form onSubmit={handleSubmit(addUser)} style={{padding: '0 35px'}}>
            <Field name='email' fields={campos[0]} component={LluField}/>
            <Field name='username' fields={campos[1]} component={LluField}/>
            <Field name='genero' fields={campos[2]} component={LluFieldSelect}/>
            <Field name='password' fields={campos[3]} component={LluField}/>
            <Field name='telefono' fields={campos[4]} component={LluField}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
                et dolore magna aliqua. </p>
            <div className="row">
            <span className="checkbox-inline col-12"><input type="checkbox" value=""/>Lorem ipsum dolor sit amet,
            consectetur</span>
            </div>
            <div key="button_next" className="col-12 text-center">
                <button type='submit'>Registrar</button>
                {/*<LluModalRegisterParentStep2/>*/}
            </div>
        </form>
    )
};

const mapDispatchToProps = dispatch => ({
    addUser: payload => dispatch(setUserRegister(payload))
});

LluFormStep1 = reduxForm({
    form: 'register',
    destroyOnUnmount: false
})(LluFormStep1);

export default connect(null, mapDispatchToProps)(LluFormStep1);