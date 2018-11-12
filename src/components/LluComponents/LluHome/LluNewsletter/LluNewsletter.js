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
                <p>La comunidad de viajeros también puede ser parte del equipo lluqi.com</p>
                <h1>¿Quieres ser parte del equipo <span>Lluqi?</span></h1>
                <p style={{marginBottom: this.state.width < 601 ? 0 : "50px"}} className="container">Déjanos tu correo electrónico y te enviaremos más información para que te unas a nosotros!</p>
                <div style={{display: "unset"}} className="form-inline">
                    <input placeholder="tu correo electrónico" className="form-control form-group" type="text"/>
                    <LluButton className="btn btn-primary">Quiero saber mas</LluButton>
                </div>
            </div>
        )
    }
}

export default LluNewsletter;