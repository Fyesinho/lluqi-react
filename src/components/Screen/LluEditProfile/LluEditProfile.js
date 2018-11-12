import React, {Component} from 'react';
import LluMainHeader from '../../LluComponents/LluCommon/LluMainHeader/LluMainHeader';
import LluTermsAndConditions from '../../LluComponents/LluHome/LluTermsAndConditions/LluTermsAndConditions';

class LluEditProfile extends Component {
    render() {
        return[
            <LluMainHeader key={'main-header'}/>,
            <LluTermsAndConditions key='terms'/>
        ];
    }
}

export default LluEditProfile;