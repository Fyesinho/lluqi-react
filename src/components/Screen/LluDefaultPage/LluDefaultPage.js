import React from 'react';
import LluMainHeader from '../../LluComponents/LluCommon/LluMainHeader/LluMainHeader';
import LluFooter from '../../LluComponents/LluHome/LluFooter/LluFooter';
import LluTermsAndConditions from '../../LluComponents/LluHome/LluTermsAndConditions/LluTermsAndConditions';

class LluDefaultPage extends React.Component {
    render() {
        return (
            <div>
                <LluMainHeader/>
                <section className='container' style={{marginTop: 80, background: 'white', padding: '50px 100px 50px 100px', textAlign: 'center'}}>
                    {this.props.children}
                </section>
                <LluFooter/>
                <LluTermsAndConditions/>
            </div>
        );
    }
}

export default LluDefaultPage;