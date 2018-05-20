import React, {Component} from 'react';
import LluProfileHostel from "../LLuProfileHostel/LluProfileHostel";
import LluProfileTraveler from "../LLuProfileTraveler/LluProfileTraveler";

class LluProfileSelect extends Component {
    render() {
        const user = this.props.match.params.name_profile;
        if (user === 'rodrigo') {
            sessionStorage.setItem('user', user);
            sessionStorage.setItem('type', 'viajero');
            return (
                <LluProfileTraveler/>
            )
        } else if (user === 'costamora') {
            sessionStorage.setItem('user', user);
            sessionStorage.setItem('type', 'hostal');
            return (
                <LluProfileHostel/>
            )
        }
    }
}

export default LluProfileSelect;