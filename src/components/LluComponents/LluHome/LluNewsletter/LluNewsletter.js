import React, {Component} from 'react';
//Assets
import './LluNewsletter.css';
import LluButton from "../../LluCommon/LluButton/LluButton";

class LluNewsletter extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
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
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <div className="llu-newsletter">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore </p>
                <h1>¿Quieres recibir novedades de <span>Lluqi.com</span> en tu correo?</h1>
                <p style={{marginBottom: this.state.width < 601 ? 0 : "50px"}} className="container">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div style={{display: "unset"}} className="form-inline">
                    <input placeholder="tu correo electrónico" className="form-control form-group" type="text"/>
                    <LluButton className="btn btn-primary">Suscribirme</LluButton>
                </div>
            </div>
        )
    }
}

export default LluNewsletter;