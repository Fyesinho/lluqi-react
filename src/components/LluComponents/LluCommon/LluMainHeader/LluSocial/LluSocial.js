import React, {Component} from 'react';
import LluIcon from "../../LluIcon/LluIcon";

class LluSocial extends Component {
    render() {
        return (
            <div className="llu-social">
                <LluIcon className="icon fab fa-facebook-f"/>
                <LluIcon className="icon fab fa-twitter"/>
                <LluIcon className="icon fab fa-instagram"/>
                <LluIcon className="icon fab fa-youtube"/>
                <LluIcon style={{marginLeft: "25px"}} className="icon fa fa-question-circle"/>
            </div>
        )
    }
}
export default LluSocial;