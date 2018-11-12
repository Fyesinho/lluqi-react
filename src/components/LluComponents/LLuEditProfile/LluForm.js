import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import LluField from '../LluCommon/LluField/LluField';
import LluFieldSelect from '../LluCommon/LluFieldSelect/LluFieldSelect';
import LluModalRegisterStep2
    from '../../LluModals/LluModalsRegisterTraveler/LluModalRegisterStep2/LluModalRegisterStep2';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = '* El correo es requerido';
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

const campos = [
    {
        title: 'Tu correo electrónico',
        icon: 'fas fa-envelope',
        placeholder: 'correo@gmail.com',
        type: 'email'
    },
    {
        title: 'Tu nombre y apellido',
        icon: 'fas fa-user',
        placeholder: 'Nombre Apellido',
        type: 'text'
    },
    {
        title: 'Soy...',
        icon: 'fa fa-transgender',
        options: ['Hombre', 'Mujer', 'Otro'],
    },
    {
        title: 'Elige una contraseña',
        icon: 'fa fa-key',
        placeholder: '********',
        type: 'password'
    },
    {
        title: 'Número móvil',
        icon: 'fa fa-mobile',
        placeholder: '+569-12345678',
        type: 'phone'
    },
    {
        title: 'Repite la contraseña',
        icon: 'fa fa-key',
        placeholder: '********',
        type: 'password'
    }
];

function test() {
    return;
}


let LluForm = props => {
    const {handleSubmit, pristine, invalid} = props;
    return (
        <div className='container' style={{marginTop: 80, background: 'white'}}>
            <form onSubmit={handleSubmit(test)}>
                <Row >
                    <Col md={12}>
                        <Field name='username' fields={campos[1]} component={LluField} isPristine={pristine}/>
                        <Field name='genero' fields={campos[2]} component={LluFieldSelect} isPristine={pristine}/>
                        <Field name='telefono' fields={campos[4]} component={LluField} isPristine={pristine}/>
                    </Col>
                </Row>
                <Row>
                    <div key="button_next" className="col-12 text-center">
                        <button disabled={pristine || invalid}
                                className="btn btn-primary shadow" type='submit'>Aceptar
                        </button>
                    </div>
                </Row>
            </form>
        </div>
    );
};


LluForm = reduxForm({
    form: 'edit_user',
    validate,
    destroyOnUnmount: false
})(LluForm);

export default LluForm;