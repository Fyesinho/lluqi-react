import React, { Component } from 'react';
import './LluAnchor.css';

class LluAnchor extends Component{
    render(){
        return(
            <a id={this.props.id}
               className={this.props.className + " llu-anchor"}
               onClick={this.props.action}
               href={this.props.href}
               style={this.props.style}
               target={this.props.target}>{this.props.children}</a>
        )
    }
}

export default LluAnchor;