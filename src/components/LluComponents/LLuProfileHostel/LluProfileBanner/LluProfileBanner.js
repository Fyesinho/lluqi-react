import React, { Component } from 'react';
//Assets
import './LluProfileBanner.css';

class LluProfileBanner extends Component{
    render() {
        return (
            <div className="llu-profile_banner container" style={{marginTop: 80}}>
                <img src={this.props.main_picture} alt="banner_profile"/>
            </div>
        )
    }
}

export default LluProfileBanner;