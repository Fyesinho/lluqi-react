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
        subtitle: 'Elija una contraseña segura',
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

const checkEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = '* El correo es requerido';
    } else if (!checkEmail(values.email)) {
        errors.email = '* Ingresar correo válido';
    }
    if(!values.username) {
        errors.username = '* El nombre de usuario es requerido';
    } else if (values.username.length < 6) {
        errors.username = '* El nombre de usuario debe tener 6 o mas caracteres';
    }
    if(!values.genero) {
        errors.genero = '* El género es requerido';
    }
    if(!values.password) {
        errors.password = '* La contraseña es requerida';
    } else if (values.password.length < 8) {
        errors.password = '* La contraseña debe tener 8 o mas caracteres';
    }
    if(!values.telefono) {
        errors.telefono = '* El telefono es requerido';
    } else if (values.telefono.length < 11) {
        errors.telefono = '* El telefono debe ser de la forma 56912345678';
    }
    return errors;
};

const algo = () => console.log('algo');

let LluFormStep1 = props => {
    console.log(props);
    const {handleSubmit, addUser, pristine, invalid} = props;
    return <form onSubmit={handleSubmit(addUser)} style={{padding: '0 35px', maxWidth: 490, margin: 'auto'}}>
        <Field name='email' fields={campos[0]} component={LluField} isPristine={pristine}/>
        <Field name='username' fields={campos[1]} component={LluField} isPristine={pristine}/>
        <Field name='genero' fields={campos[2]} component={LluFieldSelect} isPristine={pristine}/>
        <Field name='password' fields={campos[3]} component={LluField} isPristine={pristine}/>
        <Field name='telefono' fields={campos[4]} component={LluField} isPristine={pristine}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore
            et dolore magna aliqua. </p>
        <div className="row">
            <span className="checkbox-inline col-12"><input type="checkbox" value=""/>Lorem ipsum dolor sit amet,
            consectetur</span>
        </div>
        <div key="button_next" className="col-12 text-center">
            <button onClick={algo} disabled={pristine || invalid} className="btn btn-primary shadow" type='submit'>Siguiente >></button>
            {/*<LluModalRegisterParentStep2/>*/}
        </div>
    </form>};

const mapDispatchToProps = dispatch => ({
    addUser: payload => dispatch(setUserRegister(payload))
});

LluFormStep1 = reduxForm({
    form: 'register',
    validate,
    destroyOnUnmount: false
})(LluFormStep1);

export default connect(null, mapDispatchToProps)(LluFormStep1);