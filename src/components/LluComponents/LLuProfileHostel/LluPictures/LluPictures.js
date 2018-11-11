import React, {Component} from 'react';
import Slider from 'react-slick';
import {NextArrow, PrevArrow} from "../../LluCommon/LluConstants/LluConstants";
import './LluPictures.css';

class LluPictures extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: NextArrow(this.props),
            prevArrow: PrevArrow(this.props)
        };
        return (
            <div className="container llu-pictures">
                <h2>Fotos</h2>
                <Slider {...settings}>
                    {this.props.images && this.props.images.map((image, index) => <div key={index}><img src={image.url} alt={index}/></div>)}
                </Slider>
            </div>
        )
    }
}

export default LluPictures;