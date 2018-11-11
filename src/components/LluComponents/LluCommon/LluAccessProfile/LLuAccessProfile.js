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
        const user = this.capitalizeFirstLetter(JSON.parse(sessionStorage.getItem('user')).name);
        const type = sessionStorage.getItem('type');
        return (
            <div className="llu-access_profile">
                <figure>
                    <img src="https://secure.gravatar.com/avatar/523253cf254ea05c3c81da5b2448724b?s=400&d=mm&r=g" alt="profile"/>
                    <figcaption>
                        <b>{user}</b><br/>
                        <small>{type}</small>
                    </figcaption>
                </figure>
                <div className="llu-access_profile_menu">
                    <Link to={`/my-profile/`}>Perfil</Link>
                    <a href="/">Mensajes</a>
                    <a onClick={this.handlerOnClick}>Salir</a>
                </div>
            </div>
        )
    }
}

export default LLuAccessProfile;