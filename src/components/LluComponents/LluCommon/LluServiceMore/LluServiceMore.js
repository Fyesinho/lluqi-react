import React, {Component} from 'react';
import LluIcon from "../LluIcon/LluIcon";
//Assets
import './LluServiceMore.css';

class LluServiceMore extends Component{
    render(){
        return(
            <div className="llu-service_more">
                <LluIcon className='fas fa-eye'/>
                <h5>Ver mas</h5>
            </div>
        )
    }
}

export default LluServiceMore;