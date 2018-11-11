import React, {Component} from 'react';
import LluMenuUser from '../LluMenuUser/LluMenuUser';
import LluMessage from '../LluMessage/LluMessage';

import './LluMenuMessage.css';
import {getChats} from '../../LluCommon/LluApi/LluApi';

class LluMenuMessage extends Component {
    constructor() {
        super();
        this.state = {
            chats: [],
            currentChat: 0
        };
        this.handlerOnClickSelectChat = this.handlerOnClickSelectChat.bind(this);
    }

    componentDidMount() {
        getChats().then(response => {
            this.setState({
                chats: response,
                currentChat: response[0].id
            });
        });
    }

    handlerOnClickSelectChat(idChat, name) {
        this.setState({
            currentChat: idChat,
            nameChat: name
        });
    }

    render() {
        return (
            <div className="llu-chat container">
                <div className='row'>
                    <LluMenuUser chats={this.state.chats} onClick={this.handlerOnClickSelectChat}/>
                    <LluMessage currentChat={this.state.currentChat} name={this.state.nameChat}/>
                </div>
            </div>
        );
    }
}

export default LluMenuMessage;