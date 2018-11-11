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
// import LluFeedback from "../../LluComponents/LLuProfileHostel/LluFeedback/LluFeedback";
import {getHostel} from '../../LluComponents/LluCommon/LluApi/LluApi';

class LluProfileHostel extends Component {
    constructor() {
        super();
        this.state={
            hostel: {}
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        getHostel(id).then(response => {
            this.setState({
            hostel: response.data[0]
        })});
    }

    render() {
        const {hostel} = this.state;
        return [
            <LluMainHeader key="llu-main_header"/>,
            <LluProfileBanner main_picture={hostel.main_picture} key="llu-profile_banner"/>,
            <LluHostelInformation hostel={hostel} key="llu-hostel_information"/>,
            <LluSeparation key="llu-separation"/>,
            <LluAboutUs hostel={hostel} key="llu-about_us"/>,
            <LluSeparation key="llu-separation_2"/>,
            <LluPictures images={hostel.images} key="llu-pictures"/>,
            <LluSeparation key="llu-separation_3"/>,
            <LluOffer offers={hostel.offers} key="llu-offer"/>,
            <LluSeparation key="llu-separation_4"/>,
            <LluWork activities={hostel.activities} key="llu-work"/>,
            <LluSeparation key="llu-separation_5"/>,
            <LluCalendar months={hostel.months} key="llu-calendar"/>,
            <LluSeparation key="llu-separation_6"/>,
            <LluFooter key="llu-footer"/>,
            <LluTermsAndConditions key="llu-terms-and-conditions"/>
        ]
    }
}

export default LluProfileHostel;