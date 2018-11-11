import React, {Component} from 'react';
import LluMainHeader from "../../LluComponents/LluCommon/LluMainHeader/LluMainHeader";
import LluBiography from "../../LluComponents/LluMyProfileTraveler/LluBiography/LluBiography";

class LluMyProfileTraveler extends Component {
    render() {
        return [
            <LluMainHeader key="llu-main_header"/>,
            <LluBiography key="llu-biography"/>
        ]
    }
}

export default LluMyProfileTraveler;