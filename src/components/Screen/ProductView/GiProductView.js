import React, {Component} from 'react';
import GiMainHeader from "../../LluComponents/Common/GiMainHeader/GiMainHeader";

class GiProductView extends Component {
    render() {
        return (
            <div>
                <GiMainHeader from="product"/>
            {this.props.match.params.brand_product}
            <br/>
            {this.props.match.params.name_product}
            </div>
        )
    }
}

export default GiProductView;