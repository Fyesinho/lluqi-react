import React, { Component} from 'react';
import LluService from "../../LluCommon/LluService/LluService";
//Assets
import './LluOffer.css';
import LluServiceMore from "../../LluCommon/LluServiceMore/LluServiceMore";

class LluOffer extends Component{
    render(){
        const description = 'Lorem ipsun solor sir amet, consectetur adipiscing elit.';
        return(
            <div className="container llu-offer">
                <h2>Te ofrecemos</h2>
                <div className="d-flex">
                    <LluService className="fas fa-bed" title="Alojamiento" description={description}/>
                    <LluService className="fas fa-globe" title="Almuerzo" description={description}/>
                    <LluService className="fas fa-wifi" title="Internet" description={description}/>
                    <LluServiceMore/>
                </div>
            </div>
        )
    }
}

export default LluOffer;