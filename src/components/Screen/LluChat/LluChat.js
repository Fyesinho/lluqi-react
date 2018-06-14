import React, {Component} from 'react';
import LluMainHeader from "../../LluComponents/LluCommon/LluMainHeader/LluMainHeader";
import LluMenuMessage from "../../LluComponents/LluChat/LluMenuMessage/LluMenuMessage";

class LluChat extends Component {
    render() {
        return[
            <LluMainHeader key="llu-main_header"/>,
            <LluMenuMessage key="llu-chat"/>
        ]
    }
}

export default LluChat;