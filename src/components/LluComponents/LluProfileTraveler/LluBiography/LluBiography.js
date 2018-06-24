import React, {Component} from 'react';
import LluIcon from '../../LluCommon/LluIcon/LluIcon';
import LluSocialFooter from '../../LluCommon/LluSocialFooter/LluSocialFooter';
//Assets
import './LluBiography.css'

class LluBiography extends Component {
    render() {
        return (
            <div className="container" style={{marginTop: 80}}>
                <div className="row">
                    <div className="col-4 llu-biography text-center mr-2">
                        <img src="https://secure.gravatar.com/avatar/523253cf254ea05c3c81da5b2448724b?s=400&d=mm&r=g"
                             alt="profile"/>
                        <h3>Rodrigo González</h3>
                        <p>perfil viajero verificado <LluIcon className="fas fa-check-circle"/></p>
                        <p className="font-weight-bold pt-2 pb-2">Perfil activo desde 24 de septiembre de 2014</p>
                        <p className="font-weight-bold video">Video de presentacion</p>
                        <p className="pb-3">http://youtube.com/dwKefe42e_fe</p>
                        <LluSocialFooter/>
                        <hr style={{width: '80%'}}/>
                        <h6 className="pb-2">Sobre Mi</h6>
                        <p style={{width: '80%', margin: 'auto'}} className="pb-3">Lorem ipsum dolor sit amet,
                            consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. </p>
                        <p className="title-color">Fecha de nacimiento</p>
                        <p className="pb-3">23/ Septiembre /1966</p>
                        <p className="title-color">Correo electrónico</p>
                        <p className="pb-3">test@test.com</p>
                        <p className="title-color">Número móvil</p>
                        <p className="pb-3">+56920380127</p>
                        <hr style={{width: '80%'}}/>
                        <p className="font-weight-bold pt-2 pb-2">Opiniones (9)</p>
                        <p className="font-weight-bold pt-2 pb-2">Votos útiles (3)</p>
                        <p className="font-weight-bold pt-2 pb-2">Comentarios denunciados (4)</p>
                    </div>
                    <div className="col-8 llu-data" style={{maxWidth: '65.66667%'}}>
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
                            <p className="pl-5">Muchos hostales quieren saber más sobre ti. Hablar de tus habilidades, trabajos o estudios, pueden ser de interés para el hostal al que postulas</p>
                            <p className="pl-5 pt-2"><span className="font-weight-bold">Actualmente me dedico a: </span></p>
                            <p className="pl-5 pt-2">Viajar a tiempo completo</p>
                            <p className="pl-5 pt-2"><span className="font-weight-bold">Tengo experiencia en: </span></p>
                            <p className="pl-5 pt-2">Viaje, administración e idiomas</p>
                            <p className="pl-5 pt-2"><span className="font-weight-bold">Poseo habilidades en: </span></p>
                            <p className="pl-5 pt-2">Relaciones humanas</p>
                            <p className="pl-5 pt-2"><span className="font-weight-bold">Tengo estudios en: </span></p>
                            <p className="pl-5 pt-2">Idiomas</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LluBiography;