import React, {Component} from 'react';
import LluMenuUser from '../LluMenuUser/LluMenuUser';
import LluMessage from '../LluMessage/LluMessage';

import './LluMenuMessage.css';

class LluMenuMessage extends Component {
    render() {
        return (
            <div className="llu-chat container row" style={{padding: 0}}>
                <LluMenuUser/>
                <LluMessage/>
            </div>
        )
    }
}

export default LluMenuMessage;