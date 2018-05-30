import React, {Component} from 'react';
import LluIcon from "../LluIcon/LluIcon";
//Assets
import './LluMonth.css';

class LluMonth extends Component{
    render(){
        const icon = this.props.available ? 'fas fa-calendar-check' : 'fas fa-calendar-times';
        const color = this.props.available ? 'green' : '#e9e7e7';
        return(
            <div className="llu-month">
                <LluIcon style={{color: color}} className={icon}/>
                <h6>{this.props.title}</h6>
            </div>
        )
    }
}

export default LluMonth;