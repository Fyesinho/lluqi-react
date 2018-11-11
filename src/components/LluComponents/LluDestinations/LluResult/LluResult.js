import React, {Component} from 'react';
import LluHostels from "../LluHostels/LluHostels";
import {getHostels} from '../../LluCommon/LluApi/LluApi';

class LluResult extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0, hostels: [], totalHostels: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        getHostels(1).then(response => this.setState({hostels: response.data, totalHostels: response.total}));
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
        // const classCol = 'col-12';
        return (
            <div className={classCol}>
                <p className="finder">Hemos encontrado {this.state.totalHostels} resultados</p>
                <hr/>
                {this.state.hostels.length > 0 && this.state.hostels.map((hostel, index) => {
                    return <LluHostels hostel={hostel} key={index}/>
                })}
            </div>
        )
    }
}

export default LluResult;