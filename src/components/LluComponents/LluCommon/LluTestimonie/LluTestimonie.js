import React, {Component} from 'react';

class LluTestimonie extends Component {
    render() {
        return (
            <div>
                <img alt="0" src={this.props.image}/>
                <p>{this.props.description}</p>
                <h5>{this.props.user}</h5>
            </div>
        )
    }
}

export default LluTestimonie;