import React, { Component } from 'react';
import LluMainHeader from "../../LluComponents/LluCommon/LluMainHeader/LluMainHeader";
import LluContainerForDestinations from "../../LluComponents/LluDestinations/LluContainerForDestinations/LluContainerForDestinations";

class LluDestinations extends Component {
    render() {
        return [
            <LluMainHeader key="llu-main_header"/>,
            <LluContainerForDestinations key="llu-continer"/>
        ]
    }
}

export default LluDestinations;