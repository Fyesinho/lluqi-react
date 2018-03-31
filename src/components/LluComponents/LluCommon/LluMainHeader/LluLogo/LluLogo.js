import React, {Component} from 'react';
import LluAnchor from "../../LluAnchor/LluAnchor";
//Assets
import logo from '../../../../../assets/images/logo.png';

class LluLogo extends Component {
    render() {
        return (
            <LluAnchor className="llu-logo">
                <img src={logo} alt="logo"/>
            </LluAnchor>
        )
    }
}

export default LluLogo;