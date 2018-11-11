import React, {Component} from 'react';
import LluProfileHostel from "../LLuProfileHostel/LluProfileHostel";
import LluProfileTraveler from "../LLuProfileTraveler/LluProfileTraveler";

class LluProfileSelect extends Component {
    render() {
        const userType = sessionStorage.getItem('type');
        if (userType === 'travele1r') {
            return (
                <LluProfileTraveler/>
            )
        } else if (userType === 'traveler') {
            return (
                <LluProfileHostel/>
            )
        }
    }
}

export default LluProfileSelect;