import React, { Component } from 'react';
import './LluContainerForDestinations.css';
import LluFilter from "../LluFilter/LluFilter";
import LluResult from "../LluResult/LluResult";

class LluContainerForDestinations extends Component {
    render() {
        return(
            <div style={{marginTop: 80}}>
                <div className="m-auto row container text-center llu-container-filter">
                    <LluFilter/>
                    <LluResult/>
                </div>
            </div>
        )
    }
}

export default LluContainerForDestinations;