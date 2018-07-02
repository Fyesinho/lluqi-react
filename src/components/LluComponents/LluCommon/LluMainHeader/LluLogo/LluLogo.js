import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Assets
import logo from '../../../../../assets/images/logo.png';

class LluLogo extends Component {
    render() {
        return (
            <Link to="/" className="llu-logo">
                <img src={logo} alt="logo"/>
            </Link>
        )
    }
}

export default LluLogo;