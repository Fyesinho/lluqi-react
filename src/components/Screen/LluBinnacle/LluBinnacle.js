import React, {Component} from 'react';
import LluMainHeader from "../../LluComponents/LluCommon/LluMainHeader/LluMainHeader";
import LluLabels from "../../LluComponents/LluBinnacle/LluLabels/LluLabels";
import LluFeed from "../../LluComponents/LluBinnacle/LluFeed/LluFeed";

class LluBinnacle extends Component{
    render(){
        return[
            <LluMainHeader key="llu-main_header"/>,
            <LluLabels key="llu-labels"/>,
            <LluFeed key="llu-feed"/>
        ]
    }
}

export default LluBinnacle;