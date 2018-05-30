import React, {Component} from 'react';
import LluMainHeader from "../../LluComponents/LluCommon/LluMainHeader/LluMainHeader";
import LluBiography from "../../LluComponents/LluProfileTraveler/LluBiography/LluBiography";

class LluProfileTraveler extends Component {
    render() {
        return [
            <LluMainHeader key="llu-main_header"/>,
            <LluBiography key="llu-biography"/>
        ]
    }
}

export default LluProfileTraveler;