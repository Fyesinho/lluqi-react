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
        let font = '35px';
        if (this.state.isClicked) {
            clase = ' color-primary'
        }
        let col = 'col-4';
        if(this.props.from === 'hostel'){
            col = 'col-3';
        }
        if(this.props.from === 'hostel2'){
            col = 'col-2';
            font = '25px'
        }
        return (
            <div onClick={this.handleClick} className={col + " text-center pb-3" + clase}>
                <LluIcon style={{fontSize: font}}
                         className={this.props.className + clase}/><br/>
                <span className="text-center">{this.props.children}</span>
            </div>
        )
    }
}

export default LluIconSelect;