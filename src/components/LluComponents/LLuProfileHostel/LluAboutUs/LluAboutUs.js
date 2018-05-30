import React, {Component} from 'react';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";

import './LluAboutUs.css';
import LluAnchor from "../../LluCommon/LluAnchor/LluAnchor";

class LluAboutUs extends Component {
    render() {
        return (
            <div className="container llu-about_us">
                <h2>Quienes Somos</h2>
                <LluAnchor href="http://www.columbahostel.com">
                    <h6>
                        <LluIcon style={{color: '#ffb400'}} className="fas fa-globe"/>
                     http://www.columbahostel.com
                    </h6>
                </LluAnchor>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        )
    }
}

export default LluAboutUs;