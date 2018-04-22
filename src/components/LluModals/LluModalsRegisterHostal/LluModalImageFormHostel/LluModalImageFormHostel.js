import React, {Component} from 'react';
import LluAnchor from "../../../LluComponents/LluCommon/LluAnchor/LluAnchor";
//Assets
import './LluModalImageFormHostel.css';
import LluIcon from "../../../LluComponents/LluCommon/LluIcon/LluIcon";

class LluModalImageFormHostel extends Component {
    render() {
        return (
            <div className="llu-image_form_hostel">
                <div className="col-12 text-right">
                    <LluAnchor action={this.props.closeModal} className="close-element"><LluIcon
                        className="fas fa-times-circle"/></LluAnchor>
                </div>
            </div>
        )
    }
}

export default LluModalImageFormHostel;