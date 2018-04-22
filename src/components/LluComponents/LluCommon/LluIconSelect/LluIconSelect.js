import React, {Component} from 'react';
import LluIcon from "../LluIcon/LluIcon";

class LluIconSelect extends Component {
    constructor() {
        super();
        this.state = {
            isClicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    render() {
        let clase = '';
        if (this.state.isClicked) {
            clase = ' color-primary'
        }
        return (
            <div onClick={this.handleClick} className={"col-4 text-center float-lg-left" + clase}>
                <LluIcon style={{fontSize: '35px'}}
                         className={this.props.className + clase}/><br/>
                <span className="text-center">{this.props.children}</span>
            </div>
        )
    }
}

export default LluIconSelect;