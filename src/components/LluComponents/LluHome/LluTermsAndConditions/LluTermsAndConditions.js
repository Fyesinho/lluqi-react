import React, {Component} from 'react';

import './LluTermasAndConditions.css';
import LluSocialFooter from "../../LluCommon/LluSocialFooter/LluSocialFooter";
import LluAnchor from "../../LluCommon/LluAnchor/LluAnchor";

class LluTermsAndConditions extends Component {
    render() {
        return (
            <div className="container llu-terms">
                <div className="row">
                    <div className="col-md-5">
                        &#9400;2016-2018. Lluqi.com Todos los derechos reservados
                    </div>
                    <div className="col-md-3">
                        <LluAnchor>Términos y condiciones</LluAnchor>
                    </div>
                    <div className="col-md-2">
                        <LluAnchor>Política de privacidad</LluAnchor>
                    </div>
                    <div className="col-md-2">
                        <LluSocialFooter className="llu-social_footer"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LluTermsAndConditions;