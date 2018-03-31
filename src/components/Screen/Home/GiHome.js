//Dependencies
import React, {Component} from 'react';
//Components
import GiUploadProduct from "../../LluComponents/GiHome/GiUploadProduct/GiUploadProduct";
import GiMainHeader from "../../LluComponents/Common/GiMainHeader/GiMainHeader";
import GiMainBanner from "../../LluComponents/GiHome/GiMainBanner/GiMainBanner";
import GiOustandingSection from "../../LluComponents/GiHome/GiOustandingSection/GiOustandingSection";
import GiCollectionsSection from "../../LluComponents/GiHome/GiCollectionsSection/GiCollectionsSection";
import GiFeedSection from "../../LluComponents/GiHome/GiFeedSection/GiFeedSection";

class GiHome extends Component {
    render() {
        return (
            <div>
                <GiUploadProduct/>
                <GiMainHeader from="Home"/>
                <GiMainBanner/>
                <article>
                    <GiOustandingSection/>
                    <GiCollectionsSection/>
                    <GiFeedSection/>
                </article>
            </div>
        );
    }
}

export default GiHome;