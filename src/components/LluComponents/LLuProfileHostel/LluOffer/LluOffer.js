import React, { Component} from 'react';
import LluService from "../../LluCommon/LluService/LluService";
//Assets
import './LluOffer.css';

class LluOffer extends Component{
    render(){
        const description = 'Lorem ipsun solor sir amet, consectetur adipiscing elit.';
        return(
            <div className="container llu-offer">
                <h2>Te ofrecemos</h2>
                <div className="d-flex">
                    {this.props.offers && this.props.offers.splice(0, 6).map((activity, index) =>
                        <LluService key={index}
                                    className={activity.avatar}
                                    title={activity.offer}
                                    description={description}/>
                    )}
                </div>
                {this.props.offers && this.props.offers.length > 0 ?
                    <div className="d-flex" style={{marginTop: 15}}>
                        {this.props.offers && this.props.offers.splice(0, 6).map((activity, index) =>
                            <LluService key={index}
                                        className={activity.avatar}
                                        title={activity.offer}
                                        description={description}/>
                        )}
                    </div> : null}
                {this.props.offers && this.props.offers.length > 0 ?
                    <div className="d-flex" style={{marginTop: 15}}>
                        {this.props.offers && this.props.offers.splice(0, 6).map((activity, index) =>
                            <LluService key={index}
                                        className={activity.avatar}
                                        title={activity.offer}
                                        description={description}/>
                        )}
                    </div> : null }
                {this.props.offers && this.props.offers.length > 0 ?
                    <div className="d-flex" style={{marginTop: 15}}>
                        {this.props.offers && this.props.offers.splice(0, 6).map((activity, index) =>
                            <LluService key={index}
                                        className={activity.avatar}
                                        title={activity.offer}
                                        description={description}/>
                        )}
                    </div> : null}
            </div>
        )
    }
}

export default LluOffer;