import React from 'react';
import LluMainHeader from '../../LluComponents/LluCommon/LluMainHeader/LluMainHeader';
import LluFooter from '../../LluComponents/LluHome/LluFooter/LluFooter';
import LluTermsAndConditions from '../../LluComponents/LluHome/LluTermsAndConditions/LluTermsAndConditions';
import LluNewsletter from '../../LluComponents/LluHome/LluNewsletter/LluNewsletter';
import LluWelcome from '../../LluComponents/LluPostPago/LluWelcome';

class LluPostPago extends React.Component {
    render() {
        return[
            <LluMainHeader key='1'/>,
            <LluWelcome  key='2' {...this.props}/>,
            <LluNewsletter key='3'/>,
            <LluFooter key='4'/>,
            <LluTermsAndConditions key='5'/>
        ];
    }
}

export default LluPostPago;