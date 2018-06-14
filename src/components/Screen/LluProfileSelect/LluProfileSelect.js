import React, {Component} from 'react';
import LluProfileHostel from "../LLuProfileHostel/LluProfileHostel";
import LluProfileTraveler from "../LLuProfileTraveler/LluProfileTraveler";

class LluProfileSelect extends Component {
    render() {
        const userType = sessionStorage.getItem('type');
        if (userType === 'traveler') {
            return (
                <LluProfileTraveler/>
            )
        } else if (userType === 'hostel') {
            return (
                <LluProfileHostel/>
            )
        }
    }
}

export default LluProfileSelect;