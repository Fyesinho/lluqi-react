import React, {Component} from 'react';
//Components
import LluLogo from "./LluLogo/LluLogo";
import LluMenu from "./LluMenu/LluMenu";
import LluSocial from "./LluSocial/LluSocial";
//Assets
import './LluMainHeader.css'

class LluMainHeader extends Component {
    render() {
        return (
            <header className="llu-main_header">
                <div className="container-header">
                    <LluLogo/>
                    <div style={{paddingTop: "18px"}}>
                        <LluMenu/>
                        <LluSocial/>
                    </div>
                </div>
            </header>
        )
    }
}

export default LluMainHeader;