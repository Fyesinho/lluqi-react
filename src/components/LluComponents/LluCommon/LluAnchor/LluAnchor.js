import React, { Component } from 'react';

class LluAnchor extends Component{
    render(){
        return(
            <a id={this.props.id}
               className={this.props.className}
               onClick={this.props.action}
               href={this.props.href}
               style={this.props.style}
               target={this.props.target}>{this.props.children}</a>
        )
    }
}

export default LluAnchor;