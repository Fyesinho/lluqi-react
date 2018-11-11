import React, {Component} from 'react';
import LluProfileHostel from "../LLuProfileHostel/LluProfileHostel";
import LluMyProfileTraveler from '../LLuMyProfileTraveler/LluMyProfileTraveler';

class LluMyProfileSelect extends Component {
    render() {
        const userType = sessionStorage.getItem('type');
        if (userType === 'traveler') {
            return (
                <LluMyProfileTraveler/>
            )
        } else if (userType === 'hostel') {
            return (
                <LluProfileHostel/>
            )
        }
    }
}

export default LluMyProfileSelect;