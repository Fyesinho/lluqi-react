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
        const {hostelsData} = this.props;
        const classCol = this.state.width > 600 ? 'col-7 ml-5 mt-2' : 'col-12';
        if (!hostelsData) {
            return <div>Cargando...</div>;
        }
        return (
            <div className={classCol}>
                <p className="finder">Hemos encontrado {hostelsData.length} resultados</p>
                <hr/>
                {hostelsData && hostelsData.map((hostel, index) => {
                    return <LluHostels hostel={hostel} key={index}/>;
                })}
            </div>
        );
    }
}

export default LluResult;