import React from 'react';
import LluMainHeader from '../../LluComponents/LluCommon/LluMainHeader/LluMainHeader';
import LluFooter from '../../LluComponents/LluHome/LluFooter/LluFooter';
import LluTermsAndConditions from '../../LluComponents/LluHome/LluTermsAndConditions/LluTermsAndConditions';
import LluPricesPayu from '../../LluComponents/LluPrepago/LluPricesPayu';

class LluPrePago extends React.Component {
    render() {
        return [
            <LluMainHeader key="llu-main_header"/>,
            <LluPricesPayu/>,
            <LluFooter/>,
            <LluTermsAndConditions/>
        ];
    }
}

export default LluPrePago;
