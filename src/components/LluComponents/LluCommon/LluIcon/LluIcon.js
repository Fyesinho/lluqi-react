import React, {Component} from 'react';

class LluIcon extends Component{
    render(){
        return(
            <i style={this.props.style} className={this.props.className}>{this.props.children}</i>
        )
    }
}

export default LluIcon;