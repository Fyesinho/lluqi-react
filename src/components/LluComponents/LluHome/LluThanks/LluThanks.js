import React, {Component} from 'react';
import './LluThanks.css';

class LluThanks extends Component {
    render() {
        return (
            <div className="llu-thanks row vertical-center">
                <div className="col-md-3">
                    <img src="https://i1.wp.com/beta.lluqi.com/wp-content/uploads/2017/10/logo.png?w=1080&ssl=1"
                         alt="lluqi"/>
                </div>
                <div className="col-md-3 font-weight-bold">
                    ES POSIBLE GRACIAS A
                </div>
                <div className="col-md-3">
                    <img src="https://i0.wp.com/beta.lluqi.com/wp-content/uploads/2017/06/logo-corfo.png?w=1080&ssl=1"
                         alt="lluqi"/>
                </div>
                <div className="col-md-3">
                    <img
                        src="https://i1.wp.com/beta.lluqi.com/wp-content/uploads/2017/06/logo-santiago.png?w=1080&ssl=1"
                        alt="lluqi"/>
                </div>
            </div>
        )
    }
}

export default LluThanks;