import React from 'react';
import {Field, reduxForm} from 'redux-form';
//Assets
import './LluFormStep1.css';
import LluField from "../LluField/LluField";
import LluFieldSelect from "../LluFieldSelect/LluFieldSelect";
import {setUserRegister} from "../../../redux/modules/user/user";
import {connect} from 'react-redux';
import {closeModalRegisterTravelerOne} from "../../../redux/modules/modal_register_traveler/modal_register_traveler";
import {openModalRegisterTravelerTwo} from "../../../redux/modules/modal_register_traveler/modal_register_traveler_step2";
import LluModalRegisterStep2
    from "../../../LluModals/LluModalsRegisterTraveler/LluModalRegisterStep2/LluModalRegisterStep2";

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
        options: ['Hombre', 'Mujer', 'Otro'],
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
    },
    {
        title: 'Repite la contraseña',
        icon: 'fa fa-key',
        placeholder: '********',
        subtitle: 'Las contraseñas deben coincidir',
        type: 'password'
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
    if (!values.username) {
        errors.username = '* El nombre de usuario es requerido';
    } else if (values.username.length < 6) {
        errors.username = '* El nombre de usuario debe tener 6 o mas caracteres';
    }
    if (!values.genero) {
        errors.genero = '* El género es requerido';
    }
    if (!values.password) {
        errors.password = '* La contraseña es requerida';
    } else if (values.password.length < 8) {
        errors.password = '* La contraseña debe tener 8 o mas caracteres';
    }
    if (!values.repassword || values.repassword !== values.password) {
        errors.repassword = '* Las contraseñas deben coincidir';
    }
    if (!values.telefono) {
        errors.telefono = '* El telefono es requerido';
    } else if (values.telefono.length < 11) {
        errors.telefono = '* El telefono debe ser de la forma 56912345678';
    }
    return errors;
};

const handleClick = (event, props) => {
    const {closeModal} = props;
    closeModal();
};

let LluFormStep1 = props => {
    const {handleSubmit, addUser, pristine, invalid} = props;
    return <form onSubmit={handleSubmit(addUser)} style={{padding: '0 35px', maxWidth: 490, margin: 'auto'}}>
        <Field name='email' fields={campos[0]} component={LluField} isPristine={pristine}/>
        <Field name='username' fields={campos[1]} component={LluField} isPristine={pristine}/>
        <Field name='genero' fields={campos[2]} component={LluFieldSelect} isPristine={pristine}/>
        <Field name='password' fields={campos[3]} component={LluField} isPristine={pristine}/>
        <Field name='repassword' fields={campos[5]} component={LluField} isPristine={pristine}/>
        <Field name='telefono' fields={campos[4]} component={LluField} isPristine={pristine}/>
        <p>Antes de finalizar tu registro en lluqi.com, debes leer y aceptar la Política de Privacidad que indica cómo conservaremos y utilizaremos tu información personal</p>
        <div className="row">
            <span className="checkbox-inline col-12">Lorem ipsum dolor sit amet,onsectetur</span>
        </div>
        <div key="button_next" className="col-12 text-center">
            <button onClick={event => handleClick(event, props)}
                    disabled={pristine || invalid}
                    className="btn btn-primary shadow" type='submit'>Aceptar
            </button>
            <LluModalRegisterStep2/>
        </div>
    </form>;
};

const mapDispatchToProps = dispatch => ({
    addUser: payload => dispatch(setUserRegister(payload)),
    closeModal: payload => dispatch(closeModalRegisterTravelerOne(payload)),
    openNextModal: payload => dispatch(openModalRegisterTravelerTwo(payload))
});

LluFormStep1 = reduxForm({
    form: 'register',
    validate,
    destroyOnUnmount: false
})(LluFormStep1);

export default connect(null, mapDispatchToProps)(LluFormStep1);