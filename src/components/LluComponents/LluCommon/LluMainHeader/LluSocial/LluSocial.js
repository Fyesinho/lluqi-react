import React, {Component} from 'react';
import LluIcon from "../../LluIcon/LluIcon";

class LluSocial extends Component {
    render() {
        return (
            <div className="llu-social">
                <LluIcon className="icon fa fa-facebook"/>
                <LluIcon className="icon fa fa-twitter"/>
                <LluIcon className="icon fa fa-instagram"/>
                <LluIcon className="icon fa fa-youtube-play"/>
                <LluIcon style={{marginLeft: "25px"}} className="icon fa fa-question-circle"/>
            </div>
        )
    }
}
export default LluSocial;