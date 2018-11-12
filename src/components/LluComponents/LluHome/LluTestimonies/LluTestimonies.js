import React, {Component} from 'react';
import Slider from 'react-slick';
//Assets
import './LluTestimonies.css';
//Functions
import {NextArrow, PrevArrow} from "../../LluCommon/LluConstants/LluConstants";
import LluTestimonie from "../../LluCommon/LluTestimonie/LluTestimonie";
import {getTestimonials} from '../../LluCommon/LluApi/LluApi';

class LluTestimonies extends Component {
    constructor() {
        super();
        this.state = {
            testimonials: []
        }
    }

    componentDidMount() {
        getTestimonials().then(response => {
            this.setState({
                testimonials: response[0]
            })
        })
    }

    render() {
        const settings = {
            dots: true,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>
        };
        return (
            <div className="llu-testimonies">
                <Slider {...settings} className="llu-slider">
                    {this.state.testimonials && this.state.testimonials.map((value, index) => {
                        const image = `https://admin.lluqi.com/media/${value.media[0].id}/${value.media[0].file_name}`;
                        return <div key={"llu-testimonie" + index}>
                            <LluTestimonie image={image}
                                           description={value.description} user={value.user}/>
                        </div>
                    })}
                </Slider>
            </div>
        )
    }
}

export default LluTestimonies;