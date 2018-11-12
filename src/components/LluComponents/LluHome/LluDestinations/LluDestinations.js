import React, {Component} from 'react';
import Slider from 'react-slick';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";
import LluButton from "../../LluCommon/LluButton/LluButton";
import {NextArrow, PrevArrow} from "../../LluCommon/LluConstants/LluConstants";
import LluDestiny from "../../LluCommon/LluDestiny/LluDestiny";

//Assets
import './LluDestinations.css';
import {getDestinations} from '../../LluCommon/LluApi/LluApi';

class LluDestinations extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        getDestinations().then(response => {
            this.setState({
                destinations: response.data.data
            })
        });
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        let slides = this.state.width < 601 ? 1 : 3;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: slides,
            slidesToScroll: 1,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>
        };
        return [
            <section key="llu-destinations" className="llu-destinations">
                <div>
                    <div className="title float-lg-left">
                        <LluIcon className="fa fa-globe"/>
                        <span> Destinos</span> ¿A que lugar deseas ir?
                    </div>
                    <LluButton className="float-lg-right btn btn-primary shadow color-white">¡Ver mas
                        destinos!</LluButton>
                </div>
                <Slider {...settings}>
                    {this.state.destinations && this.state.destinations.map(destiny => <div key={destiny.id}>
                        <LluDestiny destiny={destiny}/>
                    </div>)}

                </Slider>
            </section>

        ]
    }
}

export default LluDestinations;