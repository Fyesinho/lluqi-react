import React, {Component} from 'react';

class LluButton extends Component {
    render() {
        return (
            <button
                id={this.props.id}
                disabled={this.props.disabled}
                style={this.props.style}
                className={this.props.className}
                onClick={this.props.action}>
                {this.props.children}
            </button>
        )
    }
}

export default LluButton;