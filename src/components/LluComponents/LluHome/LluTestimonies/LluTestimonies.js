import React, {Component} from 'react';
import Slider from 'react-slick';
//Assets
import './LluTestimonies.css';
//Functions
import {nextArrow, prevArrow} from "../../LluCommon/LluConstants/LluConstants";
import LluTestimonie from "../../LluCommon/LluTestimonie/LluTestimonie";

class LluTestimonies extends Component {
    render() {
        const settings = {
            dots: true,
            nextArrow: nextArrow(this.props),
            prevArrow: prevArrow(this.props)
        };
        const arrayTest = [
            {
                image: "http://placekitten.com/g/400/200",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n" +
                "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n" +
                "voluptate velit esse cillum dolore eu fugiat nulla pariatur",
                user: "Viajero 1"
            },
            {
                image: "http://placekitten.com/g/400/200",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n" +
                "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n" +
                "voluptate velit esse cillum dolore eu fugiat nulla pariatur",
                user: "Viajero 2"
            },
            {
                image: "http://placekitten.com/g/400/200",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n" +
                "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n" +
                "voluptate velit esse cillum dolore eu fugiat nulla pariatur",
                user: "Viajero 3"
            }
        ];
        return (
            <div className="llu-testimonies">
                <Slider  {...settings} className="llu-slider">
                    {arrayTest && arrayTest.map((value, index) => {
                        return <div key={"llu-testimonie" + index}>
                            <LluTestimonie image={value.image}
                                           description={value.description} user={value.user}/>
                        </div>
                    })}
                </Slider>
            </div>
        )
    }
}

export default LluTestimonies;