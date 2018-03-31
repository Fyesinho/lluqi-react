import React, {Component} from 'react';
import Slider from 'react-slick';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";
import LluButton from "../../LluCommon/LluButton/LluButton";
import {nextArrow, prevArrow} from "../../LluCommon/LluConstants/LluConstants";

//Assets
import './LluDestinations.css';
import LluDestiny from "../../LluCommon/LluDestiny/LluDestiny";

class LluDestinations extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: nextArrow(this.props),
            prevArrow: prevArrow(this.props)
        };
        return [
            <section key="llu-destinations" className="container llu-destinations">
                <div>
                    <div className="title float-lg-left">
                        <LluIcon className="fa fa-globe"/>
                        <span> Destinos</span> ¿A que lugar deseas ir?
                    </div>
                    <LluButton className="float-lg-right btn btn-primary shadow color-white">¡Ver mas
                        destinos!</LluButton>
                </div>
                <Slider {...settings}>
                    <div>
                        <LluDestiny/>
                    </div>
                    <div>
                        <LluDestiny/>
                    </div>
                    <div>
                        <LluDestiny/>
                    </div>
                    <div>
                        <LluDestiny/>
                    </div>
                    <div>
                        <LluDestiny/>
                    </div>
                </Slider>
            </section>

        ]
    }
}

export default LluDestinations;