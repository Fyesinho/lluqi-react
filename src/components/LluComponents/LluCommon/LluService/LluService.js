import React, {Component} from 'react';
import LluIcon from "../LluIcon/LluIcon";
//Assets
import './LluService.css';

class LluService extends Component{
    render(){
        return(
            <div className="llu-service">
                <LluIcon className={this.props.className}/>
                <h6>{this.props.title}</h6>
                <small>{this.props.description}</small>
            </div>
        )
    }
}

export default LluService;