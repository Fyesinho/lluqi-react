import React, {Component} from 'react';
import LluMainHeader from "../../LluComponents/LluCommon/LluMainHeader/LluMainHeader";
import LluMenuMessage from "../../LluComponents/LluChat/LluMenuMessage/LluMenuMessage";
import LluTermsAndConditions from '../../LluComponents/LluHome/LluTermsAndConditions/LluTermsAndConditions';

class LluChat extends Component {
    render() {
        return[
            <LluMainHeader key="llu-main_header"/>,
            <LluMenuMessage key="llu-chat"/>,
            <LluTermsAndConditions key='llu-terms'/>,
        ]
    }
}

export default LluChat;