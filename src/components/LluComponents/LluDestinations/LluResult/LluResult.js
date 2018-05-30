import React, {Component} from 'react';
import LluHostels from "../LluHostels/LluHostels";

class LluResult extends Component {
    render() {
        return (
            <div className="col-7 ml-5 mt-2">
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