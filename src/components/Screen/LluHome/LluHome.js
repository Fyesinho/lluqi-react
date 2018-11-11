//Dependencies
import React, {Component} from 'react';
//Components
import LluMainHeader from "../../LluComponents/LluCommon/LluMainHeader/LluMainHeader";
import LluMainBanner from "../../LluComponents/LluHome/LluMainBanner/LluMainBanner";
import LluHowWorks from "../../LluComponents/LluHome/LluHowWorks/LluHowWorks";
import LluTestimonies from "../../LluComponents/LluHome/LluTestimonies/LluTestimonies";
import LluDestinations from "../../LluComponents/LluHome/LluDestinations/LluDestinations";
import LluNewsletter from "../../LluComponents/LluHome/LluNewsletter/LluNewsletter";
import LluThanks from "../../LluComponents/LluHome/LluThanks/LluThanks";
// import LluFooter from "../../LluComponents/LluHome/LluFooter/LluFooter";
import LluTermsAndConditions from "../../LluComponents/LluHome/LluTermsAndConditions/LluTermsAndConditions";
import LluProgress from "../../LluComponents/LluHome/LluProgress/LluProgress";

class LluHome extends Component {
    render() {
        return [
            <LluMainHeader key="llu-main_header"/>,
            sessionStorage.getItem('user') && <LluProgress key='llu-progress'/>,
            <LluMainBanner key="llu-main_banner"/>,
            <LluHowWorks key="llu-how_works"/>,
            <LluTestimonies key="llu-testimonies"/>,
            <LluDestinations key="llu-destinations"/>,
            <LluNewsletter key="llu-newsletter"/>,
            <LluThanks key="llu-thanks"/>,
            <LluTermsAndConditions key="llu-terms-and-conditions"/>
        ]
    }
}

export default LluHome;