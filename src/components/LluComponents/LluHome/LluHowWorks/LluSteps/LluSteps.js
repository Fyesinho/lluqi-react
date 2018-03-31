import React, { Component } from 'react';
import LluButton from "../../../LluCommon/LluButton/LluButton";


class LluSteps extends Component{
    render(){
        return(
            <div className="col-md-4">
                <div className="feature feature-primary">
                    <img src={this.props.image} alt={this.props.alt} className="img"/>
                    <h5 className="title"><b>{this.props.title}</b></h5>
                    <p className="description">{this.props.description}</p>
                </div>
                <LluButton className="btn success shadow">{this.props.button}</LluButton>
            </div>
        )
    }
}

export default LluSteps;