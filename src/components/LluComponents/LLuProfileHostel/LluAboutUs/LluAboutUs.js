import React, {Component} from 'react';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";

import './LluAboutUs.css';
import LluAnchor from "../../LluCommon/LluAnchor/LluAnchor";

class LluAboutUs extends Component {
    render() {
        const {hostel} = this.props;
        return (
            <div className="container llu-about_us">
                <h2 className='mb-2'>Quienes Somos</h2>
                <LluAnchor href={hostel.web}>
                    <h6>
                        <LluIcon style={{color: '#ffb400', marginRight: 4}} className="fas fa-globe"/>
                     {hostel.web}
                    </h6>
                </LluAnchor>
                <p>
                    {hostel.description}
                </p>
            </div>
        )
    }
}

export default LluAboutUs;