import React, {Component} from 'react';
import LluService from "../../LluCommon/LluService/LluService";
//Assets
import './LluWork.css';

class LluWork extends Component {
    render() {
        const description = 'Lorem ipsun solor sir amet, consectetur adipiscing elit.';
        return (
            <div className="container llu-offer">
                <h2>A cambio de tu ayuda en...</h2>
                <div className="d-flex">
                    {this.props.activities && this.props.activities.splice(0, 6).map((activity, index) =>
                        <LluService key={index}
                                    className={activity.avatar}
                                    title={activity.activity}
                                    description={description}/>
                    )}
                </div>
                {this.props.activities && this.props.activities.length > 0 ?
                    <div className="d-flex" style={{marginTop: 15}}>
                        {this.props.activities && this.props.activities.splice(0, 6).map((activity, index) =>
                            <LluService key={index}
                                        className={activity.avatar}
                                        title={activity.activity}
                                        description={description}/>
                        )}
                    </div> : null}
                {this.props.activities && this.props.activities.length > 0 ?
                    <div className="d-flex" style={{marginTop: 15}}>
                        {this.props.activities && this.props.activities.splice(0, 6).map((activity, index) =>
                            <LluService key={index}
                                        className={activity.avatar}
                                        title={activity.activity}
                                        description={description}/>
                        )}
                    </div> : null }
                {this.props.activities && this.props.activities.length > 0 ?
                    <div className="d-flex" style={{marginTop: 15}}>
                        {this.props.activities && this.props.activities.splice(0, 6).map((activity, index) =>
                            <LluService key={index}
                                        className={activity.avatar}
                                        title={activity.activity}
                                        description={description}/>
                        )}
                    </div> : null}
            </div>
        );
    }
}

export default LluWork;