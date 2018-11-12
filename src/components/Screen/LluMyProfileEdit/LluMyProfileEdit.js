import React, {Component} from 'react';
import LluMainHeader from "../../LluComponents/LluCommon/LluMainHeader/LluMainHeader";
import LluBiographyEdit from '../../LluComponents/LluMyProfileTraveler/LluBiographyEdit/LluBiographyEdit';
import LluTermsAndConditions from '../../LluComponents/LluHome/LluTermsAndConditions/LluTermsAndConditions';

class LluMyProfileEdit extends Component {
    render() {
        return [
            <LluMainHeader key="llu-main_header"/>,
            <LluBiographyEdit user='Alexander' key="llu-biography"/>,
            <LluTermsAndConditions key='trems'/>
        ]
    }
}

export default LluMyProfileEdit;