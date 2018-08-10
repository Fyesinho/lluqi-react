import React, {Component} from 'react';
import LluHostels from "../LluHostels/LluHostels";

class LluResult extends Component {
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
        const classCol = this.state.width > 600 ? 'col-7 ml-5 mt-2' : 'col-12';
        return (
            <div className={classCol}>
                <p className="finder">Hemos encontrado 13 resultados</p>
                <hr/>
                <LluHostels/>
                <LluHostels/>
                <LluHostels/>
                <LluHostels/>
                <LluHostels/>
                <LluHostels/>
                <LluHostels/>
                <LluHostels/>
            </div>
        )
    }
}

export default LluResult;