import React, {Component} from 'react';
import {getChat} from '../../../LluCommon/LluApi/LluApi';

class LluComponentMenuUser extends Component {
    constructor(){
        super();
        this.state = {
            textPreview: ''
        };
    }

    componentDidMount() {
        getChat(this.props.chat.id).then(response => {
            this.setState({
                textPreview: response[Object.values(response).length-1] ? response[Object.values(response).length-1].text : '',
                textTime: response[Object.values(response).length-1] ? response[Object.values(response).length-1].created_at.split(' ')[1] : ''
            });
            const el = document.getElementById(`chat_${this.props.chats[0].id}`);
            el.click();
        });

    }

    render() {
        const currentUser = JSON.parse(sessionStorage.getItem('user'));
        const {chat: {users}, chat} = this.props;
        const {textPreview, textTime} = this.state;
        const user = users.filter(user => user.id !== currentUser.id)[0];

        return(
            <div className="llu-menu-user mt-2 mb-2">
                <div id={`chat_${chat.id}`} style={{cursor: 'pointer'}} className="row" onClick={() => this.props.onClick(chat.id, user.name)}>
                    <div className="col-2">
                        <img src="https://secure.gravatar.com/avatar/523253cf254ea05c3c81da5b2448724b?s=400&d=mm&r=g" alt="profile"/>
                    </div>
                    <div className="col-10">
                        <div className="row mt-1">
                            <div className="col-8 title-menu-user">{user.name}</div>
                            <div className="col-4">{textTime}</div>
                        </div>
                        <div className="row">
                            <div className="col-10 resume">{textPreview.substring(0,31) + '...'}</div>
                            <div className="col-2"><div className="notify">2</div></div>
                        </div>
                    </div>
                </div>
                <hr style={{widht: '80%'}}/>
            </div>
        )
    }
}

export default LluComponentMenuUser;