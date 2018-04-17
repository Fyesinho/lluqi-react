import React, {Component} from 'react';
import LluIcon from "../LluIcon/LluIcon";
//Assets
import './LluSocialFooter.css';

class LluSocialFooter extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <LluIcon className="icon fab fa-facebook-f"/>
                <LluIcon className="icon fab fa-twitter"/>
                <LluIcon className="icon fab fa-instagram"/>
                <LluIcon className="icon fab fa-youtube"/>
            </div>
        )
    }
}
export default LluSocialFooter;