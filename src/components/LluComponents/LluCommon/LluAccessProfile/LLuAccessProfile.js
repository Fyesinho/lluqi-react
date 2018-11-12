import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//Assets
import './LluAccessProfile.css';

class LLuAccessProfile extends Component {
    constructor(){
        super();
        this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
        this.handlerOnClick = this.handlerOnClick.bind(this);
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handlerOnClick(){
        sessionStorage.clear();
        window.location.replace('/')
    }
    
    render() {
        const username = this.capitalizeFirstLetter(JSON.parse(sessionStorage.getItem('user')).name);
        const user = JSON.parse(sessionStorage.getItem('user'));
        const type = sessionStorage.getItem('type');
        const avatarHombre = 'https://www.lluqi.com/images/AVATAR%20HOMBRE.png';
        const avatarMujer = 'https://www.lluqi.com/images/AVATAR%20MUJER.png';
        return (
            <div className="llu-access_profile">
                <figure>
                    <img src={user.gender_id === "1" ? avatarHombre : avatarMujer}
                         alt="profile"/>
                    <figcaption>
                        <b>{username}</b><br/>
                        <small>{type}</small>
                    </figcaption>
                </figure>
                <div className="llu-access_profile_menu">
                    <Link to={`/mi-perfil/`}>Perfil</Link>
                    {/*<Link to={`/configuracion/`}>Configuración</Link>*/}
                    <a onClick={this.handlerOnClick}>Salir</a>
                </div>
            </div>
        )
    }
}

export default LLuAccessProfile;