import React, {Component} from 'react';
import LluIcon from "../LluIcon/LluIcon";

class LluSocialFooter extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <LluIcon className="icon fa fa-facebook"/>
                <LluIcon className="icon fa fa-twitter"/>
                <LluIcon className="icon fa fa-instagram"/>
                <LluIcon className="icon fa fa-youtube-play"/>
            </div>
        )
    }
}
export default LluSocialFooter;