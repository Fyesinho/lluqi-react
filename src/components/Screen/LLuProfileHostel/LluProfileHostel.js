import React, {Component} from 'react';
import LluMainHeader from "../../LluComponents/LluCommon/LluMainHeader/LluMainHeader";
import LluProfileBanner from "../../LluComponents/LLuProfileHostel/LluProfileBanner/LluProfileBanner";
import LluHostelInformation from "../../LluComponents/LLuProfileHostel/LluHostelInformation/LluHostelInformation";
import LluFooter from "../../LluComponents/LluHome/LluFooter/LluFooter";
import LluTermsAndConditions from "../../LluComponents/LluHome/LluTermsAndConditions/LluTermsAndConditions";
import LluSeparation from "../../LluComponents/LLuProfileHostel/LluSeparation/LluSeparation";
import LluAboutUs from "../../LluComponents/LLuProfileHostel/LluAboutUs/LluAboutUs";
import LluPictures from "../../LluComponents/LLuProfileHostel/LluPictures/LluPictures";
import LluOffer from "../../LluComponents/LLuProfileHostel/LluOffer/LluOffer";
import LluWork from "../../LluComponents/LLuProfileHostel/LluWork/LluWork";
import LluCalendar from "../../LluComponents/LLuProfileHostel/LluCalendar/LluCalendar";

class LluProfileHostel extends Component {
    render() {
        return [
            <LluMainHeader key="llu-main_header"/>,
            <LluProfileBanner key="llu-profile_banner"/>,
            <LluHostelInformation key="llu-hostel_information"/>,
            <LluSeparation key="llu-separation"/>,
            <LluAboutUs key="llu-about_us"/>,
            <LluSeparation key="llu-separation_2"/>,
            <LluPictures key="llu-pictures"/>,
            <LluSeparation key="llu-separation_3"/>,
            <LluOffer key="llu-offer"/>,
            <LluSeparation key="llu-separation_4"/>,
            <LluWork key="llu-work"/>,
            <LluSeparation key="llu-separation_5"/>,
            <LluCalendar key="llu-calendar"/>,
            <LluFooter key="llu-footer"/>,
            <LluTermsAndConditions key="llu-terms-and-conditions"/>
        ]
    }
}

export default LluProfileHostel;