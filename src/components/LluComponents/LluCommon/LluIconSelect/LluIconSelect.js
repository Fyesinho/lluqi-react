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
        let col = 'col-4';
        if(this.props.from === 'hostel'){
            col = 'col-3';
        }
        return (
            <div onClick={this.handleClick} className={col + " text-center float-lg-left" + clase}>
                <LluIcon style={{fontSize: '35px'}}
                         className={this.props.className + clase}/><br/>
                <span className="text-center">{this.props.children}</span>
            </div>
        )
    }
}

export default LluIconSelect;