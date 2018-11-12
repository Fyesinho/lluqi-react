import React, {Component} from 'react';
import LluIcon from '../../LluCommon/LluIcon/LluIcon';
import {Col, Row} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
 //Assets
import './LluBiographyEdit.css';
import {Field, reduxForm} from 'redux-form';

import "react-datepicker/dist/react-datepicker.css";
import LluIconSelect from '../../LluCommon/LluIconSelect/LluIconSelect';
import {getActivities, getLanguages, postEditProfile} from '../../LluCommon/LluApi/LluApi';

class LluBiographyEdit extends Component {
    constructor() {
        super();
        this.state = {
            languages: [],
            activities: [],
            redirect: false
        };
        this.handlerSubmitForm = this.handlerSubmitForm.bind(this);
    }

    static getDays() {
        const arrayDays = [];
        for (let i = 0; i < 31; i++) {
            arrayDays.push(i + 1);
        }
        return arrayDays;
    }

    static getMonth() {
        return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', ' Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    }

    static getYear() {
        const arrayDays = [];
        for (let i = 1918; i < 2017; i++) {
            arrayDays.push(i + 1);
        }
        return arrayDays;
    }

    componentDidMount() {
        getLanguages().then(response => {
            this.setState({
                languages: response.data
            });
        });

        getActivities().then(response => {
            this.setState({
                activities: response.data
            });
        });
    }

    handlerSubmitForm(response) {
        console.log(response);
        postEditProfile(response).then(() => {
            this.setState({
                redirect: true
            })
        })
    }

    render() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const avatarHombre = 'https://www.lluqi.com/images/AVATAR%20HOMBRE.png';
        const avatarMujer = 'https://www.lluqi.com/images/AVATAR%20MUJER.png';
        const days = LluBiographyEdit.getDays();
        const months = LluBiographyEdit.getMonth();
        const years = LluBiographyEdit.getYear();
        console.log(user);
        const {handleSubmit} = this.props;
        if(this.state.redirect) {
            return <Redirect to='/mi-perfil'/>
        }
        return (
            <form onSubmit={handleSubmit(this.handlerSubmitForm)}>
                <div className="container" style={{marginTop: 80}}>
                    <div className="row">
                        <div className="col-4 llu-biography text-center mr-2">
                            <img src={user.gender_id === "1" ? avatarHombre : avatarMujer}
                                 alt="profile"/>
                            <h3><Field name='name' className='form-control' component='input' type='text'/></h3>
                            <p>perfil viajero verificado <LluIcon className="fas fa-check-circle"/></p>
                            <p className="font-weight-bold pt-2 pb-2">Perfil activo
                                desde {user.created_at.split(' ')[0]}</p>
                            <p className="font-weight-bold video">Video de presentacion</p>
                            <p className="pb-3"><Field name='vid_youtube' className='form-control'
                                                       placeholder='Tu video de youtube' component='input' type='text'/>
                            </p>
                            <div className='row pb-2'>
                                <div className='col-2 text-right' style={{padding: '5px 0 0 0'}}><LluIcon
                                    className="icon fab fa-facebook-f"/></div>
                                <div className='col-10'><Field name='facebook' className='form-control'
                                                               placeholder='Tu facebook' component='input' type='text'/>
                                </div>
                            </div>
                            <div className='row pb-2'>
                                <div className='col-2 text-right' style={{padding: '5px 0 0 0'}}><LluIcon
                                    className="icon fab fa-twitter"/></div>
                                <div className='col-10'><Field name='vimeo' placeholder='Tu twitter'
                                                               className='form-control' component='input' type='text'/>
                                </div>
                            </div>
                            <div className='row pb-2'>
                                <div className='col-2 text-right' style={{padding: '5px 0 0 0'}}><LluIcon
                                    className="icon fab fa-instagram"/></div>
                                <div className='col-10'><Field name='instagram' placeholder='Tu instagram'
                                                               className='form-control' component='input' type='text'/>
                                </div>
                            </div>
                            <div className='row pb-2'>
                                <div className='col-2 text-right' style={{padding: '5px 0 0 0'}}><LluIcon
                                    className="icon fab fa-youtube"/></div>
                                <div className='col-10'><Field name='youtube' placeholder='Tu canal'
                                                               className='form-control' component='input' type='text'/>
                                </div>
                            </div>
                            <hr style={{width: '80%'}}/>
                            <h6 className="pb-2">Sobre Mi</h6>
                            <p className="pb-3"><Field name='about_me' placeholder='Cuentanos acerca de ti'
                                                       className='form-control' component='textarea' type='text'/></p>
                            <p className="title-color">Fecha de nacimiento</p>
                            <Row className="pb-3">
                                <Col md={3}>
                                    <Field
                                        name='day'
                                        className='form-control'
                                        component='select'
                                        type='select'>
                                        {days && days.map(day => <option key={day} value={day}>{day}</option>)}
                                    </Field></Col>
                                <Col md={5}>
                                    <Field
                                        name='month'
                                        className='form-control'
                                        component='select'
                                        type='select'>
                                        {months && months.map((month, ind) => <option key={ind+1} value={ind + 1}>{month}</option>)}
                                    </Field>
                                </Col>
                                <Col md={4}>
                                    <Field
                                        name='year'
                                        className='form-control'
                                        component='select'
                                        type='select'>
                                        {years && years.map(day => <option key={day} value={day}>{day}</option>)}
                                    </Field>
                                </Col>
                            </Row>
                            <p className="title-color">Correo electrónico</p>
                            <p className="pb-3">{user.email}</p>
                            <p className="title-color">Número móvil</p>
                            <p className="pb-3"><Field name='phone' placeholder='Tu numero de telefono'
                                                       className='form-control' component='input' type='text'/></p>
                            <hr style={{width: '80%'}}/>
                            {/*<p className="font-weight-bold pt-2 pb-2">Opiniones (9)</p>*/}
                            {/*<p className="font-weight-bold pt-2 pb-2">Votos útiles (3)</p>*/}
                            {/*<p className="font-weight-bold pt-2 pb-2">Comentarios denunciados (4)</p>*/}
                        </div>
                        <div className="col-8 llu-data" style={{maxWidth: '65.66667%'}}>
                            <div>
                                <h3 className="pl-5 pt-4 pb-3 title-color">Idiomas</h3>
                                <p className="pl-5">
                                    <span className="font-weight-bold">Idioma nativo: </span>
                                    <Field name='language_id' className='form-control' component='select' type='select'>
                                        <option/>
                                        {this.state.languages && this.state.languages.map(language => <option
                                            key={language.id} value={language.id}>{language.title}</option>)}
                                    </Field>
                                </p>
                                <p className="pl-5">
                                    <span className="font-weight-bold">Idioma secundario (opcional): </span>
                                    <Field name='language2_id' className='form-control' component='select'
                                           type='select'>
                                        <option/>
                                        {this.state.languages && this.state.languages.map(language => <option
                                            key={language.id} value={language.id}>{language.title}</option>)}
                                    </Field>
                                </p>
                                <p className="pl-5">
                                    <span className="font-weight-bold">Idioma secundario (opcional): </span>
                                    <Field name='language3_id' className='form-control' component='select'
                                           type='select'>
                                        <option/>
                                        {this.state.languages && this.state.languages.map(language => <option
                                            key={language.id} alue={language.id}>{language.title}</option>)}
                                    </Field>
                                </p>
                                <p className="pl-5">
                                    <span className="font-weight-bold">Idioma secundario (opcional): </span>
                                    <Field name='language4_id' className='form-control' component='select'
                                           type='select'>
                                        <option/>
                                        {this.state.languages && this.state.languages.map(language => <option
                                            key={language.id} value={language.id}>{language.title}</option>)}
                                    </Field>
                                </p>
                            </div>
                            <div>
                                <h3 className="pl-5 pt-4 pb-3 title-color">Ayuda</h3>
                                {/*<p className="pl-5 mb-3"><span className="font-weight-bold">Tareas</span></p>*/}
                                <div>
                                    <div className='row'>
                                        {this.state.activities && this.state.activities.map(offer => <LluIconSelect
                                            key={offer.id}
                                            className={`pointer ${offer.avatar}`}>{offer.activity}</LluIconSelect>)}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="pl-5 pt-5 pb-3 title-color">Experiencias</h3>
                                <p className="pl-5">Muchos hostales quieren saber más sobre ti. Hablar de tus
                                    habilidades,
                                    trabajos o estudios, pueden ser de interés para el hostal al que postulas</p>
                                <p className="pl-5 pt-2"><span
                                    className="font-weight-bold">Actualmente me dedico a: </span>
                                </p>
                                <p className="pl-5 pt-2"><Field name='experience' className='form-control'
                                                                component='textarea' type='text'/></p>
                                <p className="pl-5 pt-2"><span
                                    className="font-weight-bold">Tengo experiencia en: </span>
                                </p>
                                <p className="pl-5 pt-2"><Field name='experience' className='form-control'
                                                                component='textarea' type='text'/></p>
                                {/*<p className="pl-5 pt-2"><span className="font-weight-bold">Poseo habilidades en: </span>*/}
                                {/*</p>*/}
                                {/*<p className="pl-5 pt-2">Relaciones humanas</p>*/}
                                {/*<p className="pl-5 pt-2"><span className="font-weight-bold">Tengo estudios en: </span></p>*/}
                                {/*<p className="pl-5 pt-2">Idiomas</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{background: 'white'}}>
                        <Col md={6} className='text-center'>
                            <button className='btn btn-primary'>Volver</button>
                        </Col>
                        <Col md={6} className='text-center'>
                            <button type='submit' className='btn btn-primary'>Guardar</button>
                        </Col>
                    </div>
                </div>
            </form>
        );
    }
}


LluBiographyEdit = reduxForm({
    form: 'edit',
    destroyOnUnmount: false,
    initialValues: {
        name: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).name : '',
        facebook: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).facebook : '',
        vimeo: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).vimeo : '',
        instagram: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).instagram : '',
        youtube: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).youtube : '',
        phone: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).phone : '',
        about_me: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).about_me : '',
        language_id: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).language_id : '',
        language2_id: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).language2_id : '',
        language3_id: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).language3_id : '',
        language4_id: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).language4_id : '',
        description: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).description : '',
        experience: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).experience : '',
    }
})(LluBiographyEdit);

export default LluBiographyEdit;