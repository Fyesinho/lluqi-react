import React, {Component} from 'react';
import LluComponentMenuUser from './LluComponentMenuUser/LluComponentMenuUser';
import './LluMenuUser.css';

class LluMenuUser extends Component {
    render() {
        const {chats} = this.props;
        return (
            <div className="col-4">
                {chats && chats.map(chat => {
                    return <LluComponentMenuUser {...this.props} chats={chats} key={chat.id} chat={chat}/>;
                })}
            </div>
        );
    }
}

export default LluMenuUser;