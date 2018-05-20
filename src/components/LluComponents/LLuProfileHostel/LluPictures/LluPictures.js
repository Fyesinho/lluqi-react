import React, {Component} from 'react';
import Slider from 'react-slick';
import {nextArrow, prevArrow} from "../../LluCommon/LluConstants/LluConstants";
import './LluPictures.css';

class LluPictures extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: nextArrow(this.props),
            prevArrow: prevArrow(this.props)
        };
        return (
            <div className="container llu-pictures">
                <h2>Fotos</h2>
                <Slider {...settings}>
                    <div>
                        <img src="https://s-ec.bstatic.com/images/hotel/max500/104/104676895.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="https://t-ec.bstatic.com/images/hotel/max500/190/19055122.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="http://www.hostels247.com/album/213760944c182e6d873e5efcc7b462dc.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="https://s-ec.bstatic.com/images/hotel/max500/130/13052911.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="https://t-ec.bstatic.com/images/hotel/max500/107/107513252.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="https://q-ec.bstatic.com/images/hotel/max500/104/104022345.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluLXQq03sGLhYZJ3oV-X5J2v0ZsZHBrwAzjG7IFCcGFr4tPRvDQ" alt="1"/>
                    </div>
                    <div>
                        <img src="http://aff.bstatic.com/images/hotel/max500/654/65433729.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="https://s-ec.bstatic.com/images/hotel/max500/118/118897018.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-51a3jmPcP3m5tBp_5R6dTi8YTNlcdVfco3M3pedh9eNNKEPxaQ" alt="1"/>
                    </div>
                    <div>
                        <img src="http://www.hostels247.com/album/213760944c182e6d873e5efcc7b462dc.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="https://s-ec.bstatic.com/images/hotel/max500/130/13052911.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="https://t-ec.bstatic.com/images/hotel/max500/107/107513252.jpg" alt="1"/>
                    </div>
                    <div>
                        <img src="https://s-ec.bstatic.com/images/hotel/max500/115/115310998.jpg" alt="1"/>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default LluPictures;