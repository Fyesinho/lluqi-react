//Dependencies
import React, {Component} from 'react';
//Components
import LluMainHeader from "../../LluComponents/LluCommon/LluMainHeader/LluMainHeader";
import LluMainBanner from "../../LluComponents/LluHome/LluMainBanner/LluMainBanner";
import LluHowWorks from "../../LluComponents/LluHome/LluHowWorks/LluHowWorks";
import LluTestimonies from "../../LluComponents/LluHome/LluTestimonies/LluTestimonies";
import LluDestinations from "../../LluComponents/LluHome/LluDestinations/LluDestinations";
import LluNewsletter from "../../LluComponents/LluHome/LluNewsletter/LluNewsletter";

class LluHome extends Component {
    render() {
        return [
            <LluMainHeader key="llu-main_header"/>,
            <LluMainBanner key="llu-main_banner"/>,
            <LluHowWorks key="llu-how_works"/>,
            <LluTestimonies key="llu-testimonies"/>,
            <LluDestinations key="llu-destinations"/>,
            <LluNewsletter key="llu-newsletter"/>
        ]
    }
}

export default LluHome;