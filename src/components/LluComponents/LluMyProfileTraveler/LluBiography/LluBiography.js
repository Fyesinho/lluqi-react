import React, {Component} from 'react';
import LluIcon from '../../LluCommon/LluIcon/LluIcon';
import {Link} from 'react-router-dom';
//Assets
import './LluBiography.css';

class LluBiography extends Component {
    render() {
        const avatarHombre = 'https://www.lluqi.com/images/AVATAR%20HOMBRE.png';
        const avatarMujer = 'https://www.lluqi.com/images/AVATAR%20MUJER.png';
        const user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user);
        return (
            <div className="container" style={{marginTop: 80}}>
                <div className="row">
                    <div className="col-4 llu-biography text-center mr-2">
                        <img src={avatarHombre}
                             alt="profile"/>
                        <h3>{user.name}</h3>
                        <p>perfil viajero verificado <LluIcon className="fas fa-check-circle"/></p>
                        <p className="font-weight-bold pt-2 pb-2">Perfil activo desde {user.created_at.split(' ')[0]}</p>
                        <p className="font-weight-bold video">Video de presentacion</p>
                        <p className="pb-3">{user.youtube}</p>
                        <div>
                            <LluIcon className="icon fab fa-facebook-f"/>
                            <LluIcon className="icon fab fa-twitter"/>
                            <LluIcon className="icon fab fa-instagram"/>
                            <LluIcon className="icon fab fa-youtube"/>
                        </div>
                        <hr style={{width: '80%'}}/>
                        <h6 className="pb-2">Sobre Mi</h6>
                        <p style={{width: '80%', margin: 'auto'}} className="pb-3">{user.about_me || 'Cuéntanos acerca de ti'}</p>
                        <p className="title-color">Fecha de nacimiento</p>
                        <p className="pb-3">{user.birthday}</p>
                        <p className="title-color">Correo electrónico</p>
                        <p className="pb-3">{user.email}</p>
                        <p className="title-color">Número móvil</p>
                        <p className="pb-3">{`+${user.phone}`}</p>
                        <hr style={{width: '80%'}}/>
                        <p className="font-weight-bold pt-2 pb-2">Opiniones (9)</p>
                        <p className="font-weight-bold pt-2 pb-2">Votos útiles (3)</p>
                        <p className="font-weight-bold pt-2 pb-2">Comentarios denunciados (4)</p>
                    </div>
                    <div className="col-8 llu-data" style={{maxWidth: '65.66667%'}}>
                        <div style={{textAlign: 'right', color: 'white'}}><Link to='/mi-perfil-edit' className='btn btn-primary'>Editar</Link></div>
                        <div>
                            <h3 className="pl-5 pt-4 pb-3 title-color">Idiomas</h3>
                            <p className="pl-5"><span className="font-weight-bold">Idioma nativo: </span>Alemán</p>
                            <p className="pl-5"><span className="font-weight-bold">Otros idiomas: </span>Español
                                (básico)</p>
                        </div>
                        <div>
                            <h3 className="pl-5 pt-4 pb-3 title-color">Ayuda</h3>
                            <p className="pl-5"><span className="font-weight-bold">Tareas básicas</span></p>
                            <div className="flex pl-5 pt-4 pb-4">
                                <LluIcon className="icon_profile fas fa-user-plus mr-5"/>
                                <LluIcon className="icon_profile fas fa-user-plus mr-5"/>
                                <LluIcon className="icon_profile fas fa-user-plus mr-5"/>
                                <LluIcon className="icon_profile fas fa-user-plus mr-5"/>
                            </div>
                            <p className="pl-5"><span className="font-weight-bold">Tareas específicas</span></p>
                            <div className="flex pl-5 pt-4">
                                <LluIcon className="icon_profile fas fa-user-plus mr-5"/>
                                <LluIcon className="icon_profile fas fa-user-plus mr-5"/>
                                <LluIcon className="icon_profile fas fa-user-plus mr-5"/>
                                <LluIcon className="icon_profile fas fa-user-plus mr-5"/>
                            </div>
                        </div>
                        <div>
                            <h3 className="pl-5 pt-4 pb-3 title-color">Experiencias</h3>
                            <p className="pl-5">Muchos hostales quieren saber más sobre ti. Hablar de tus habilidades,
                                trabajos o estudios, pueden ser de interés para el hostal al que postulas</p>
                            <p className="pl-5 pt-2"><span className="font-weight-bold">Actualmente me dedico a: </span>
                            </p>
                            <p className="pl-5 pt-2">Viajar a tiempo completo</p>
                            <p className="pl-5 pt-2"><span className="font-weight-bold">Tengo experiencia en: </span>
                            </p>
                            <p className="pl-5 pt-2">Viaje, administración e idiomas</p>
                            <p className="pl-5 pt-2"><span className="font-weight-bold">Poseo habilidades en: </span>
                            </p>
                            <p className="pl-5 pt-2">Relaciones humanas</p>
                            <p className="pl-5 pt-2"><span className="font-weight-bold">Tengo estudios en: </span></p>
                            <p className="pl-5 pt-2">Idiomas</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LluBiography;