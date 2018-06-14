import React, {Component} from 'react';
import LluComponentMenuUser from './LluComponentMenuUser/LluComponentMenuUser';
import './LluMenuUser.css';

class LluMenuUser extends Component{
    render() {
        return(
            <div className="col-4">
                <LluComponentMenuUser/>
                <LluComponentMenuUser/>
                <LluComponentMenuUser/>
                <LluComponentMenuUser/>
            </div>
        )
    }
}

export default LluMenuUser;