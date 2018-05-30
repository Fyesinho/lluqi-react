import React, {Component} from 'react';
//Assets
import './LluAccessProfile.css';

class LLuAccessProfile extends Component {
    constructor(){
        super();
        this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    render() {
        const user = this.capitalizeFirstLetter(sessionStorage.getItem('user'));
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

            </div>
        )
    }
}

export default LLuAccessProfile;