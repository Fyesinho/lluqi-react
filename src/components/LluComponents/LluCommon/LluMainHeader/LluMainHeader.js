import React, {Component} from 'react';
//Components
import LluLogo from "./LluLogo/LluLogo";
import LluMenu from "./LluMenu/LluMenu";
import LluSocial from "./LluSocial/LluSocial";
import {Col, Row} from 'react-bootstrap';
//Assets
import './LluMainHeader.css';
import LluIcon from "../LluIcon/LluIcon";

class LluMainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        const styleMenu = {
            fontSize: 20,
            verticalAlign: 'middle'
        };
        return (
            <header className="llu-main_header">
                <div className="row">
                    {this.state.width < 601 && <LluIcon style={styleMenu} className="fas fa-bars"/>}
                    <Col md={1}>
                        <LluLogo/>
                    </Col>
                    {this.state.width < 601 && <LluIcon style={styleMenu} className="fas fa-question-circle"/>}
                    <Col md={11}>
                        <div style={{paddingTop: "18px"}}>
                            <LluMenu/>
                            <LluSocial/>
                        </div>
                    </Col>
                </div>
            </header>
        );
    }
}

export default LluMainHeader;