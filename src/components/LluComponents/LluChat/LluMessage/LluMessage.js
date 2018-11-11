import React, {Component} from 'react';
import LluIcon from '../../LluCommon/LluIcon/LluIcon';
import './LluMessage.css';
import {getChat, postCommentChat} from '../../LluCommon/LluApi/LluApi';

class LluMessage extends Component {
    constructor() {
        super();
        this.state = {
            chat: [],
            height: '100%',
            text: ''
        };
        this.updateHeight = this.updateHeight.bind(this);
        this.handlerOnClickComment = this.handlerOnClickComment.bind(this);
        this.handlerOnChangeComment = this.handlerOnChangeComment.bind(this);
    }

    componentDidMount() {
        this.updateHeight();
        window.addEventListener('resize', this.updateHeight);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentChat !== this.props.currentChat) {
            const {currentChat} = this.props;
            getChat(currentChat).then(response => {
                this.setState({
                    chat: response
                });
            });
        }
        let objDiv = document.getElementById("llu-message-content");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateHeight);
    }

    updateHeight() {
        const innerHeight = window.innerHeight - 326;
        this.setState({
            height: innerHeight
        });
    }

    handlerOnClickComment() {
        const {text, chat} = this.state;
        const myUser = JSON.parse(sessionStorage.getItem('user'));
        const dynamicIndex = Object.values(chat).length;
        postCommentChat(this.props.currentChat, text).then(() => {
            this.setState({
                chat: {
                    ...this.state.chat,
                    [dynamicIndex]: {
                        text: text, user: myUser
                    }
                },
                text: ''
            });
        });
    }

    handlerOnChangeComment({target: {value}}) {
        this.setState({
            text: value
        });
    }

    render() {
        const {name} = this.props;
        const {chat} = this.state;
        const myUser = JSON.parse(sessionStorage.getItem('user'));
        return (
            <div className="col-8" style={{padding: 0}}>
                <div className="llu-message pt-3 pb-3">
                    <div className="row">
                        <div className="col-2">
                            <img className="float-right"
                                 src="https://secure.gravatar.com/avatar/523253cf254ea05c3c81da5b2448724b?s=400&d=mm&r=g"
                                 alt="profile"/>
                        </div>
                        <div className="col-8">
                            <div className="row mt-1">
                                <p className="col-9 title-menu-user">{name}</p>
                            </div>
                            <div className="row">
                                <p className="col-10 resume">Viajero</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <LluIcon className="fas fa-info-circle text-center"/>
                        </div>
                    </div>
                </div>

                <div className="llu-message-date">
                    12 de enero de 2017
                </div>
                <hr className="hr_message"/>
                <div id='llu-message-content' className="llu-message-content container" style={{height: this.state.height}}>
                    {chat && Object.values(chat).map((response, index) => {
                        if (response.user.id === myUser.id) {
                            return <div key={index}>
                                <p className='mb-2' style={{textAlign: 'right'}}><span style={{
                                    borderRadius: 10,
                                    padding: 5,
                                    background: '#ffb400',
                                    color: 'white'
                                }}>{response.text}</span></p>
                                <p className='mb-2' style={{textAlign: 'right', fontSize: 12}}>{response.created_at}</p>
                            </div>;
                        }
                        return <div key={index}>
                            <p className='mb-2' style={{textAlign: 'left'}}><span style={{
                                borderRadius: 10,
                                padding: 5,
                                background: '#ffb400',
                                color: 'white'
                            }}>{response.text}</span></p>
                            <p className='mb-2' style={{textAlign: 'left', fontSize: 12}}>{response.created_at}</p>
                        </div>;
                    })}
                </div>
                <div className="llu-write row">
                    <div className="col-10">
                        <input id='inputChat' onKeyPress={e => {
                            if(e.key==='Enter') {
                                return this.handlerOnClickComment();
                            }
                        }}  onChange={this.handlerOnChangeComment} value={this.state.text} type='text'
                               className='form-control' placeholder='Escribe tu mensaje aquí...'/>
                    </div>
                    <div onClick={this.handlerOnClickComment} className="col-2" style={{cursor: 'pointer'}}><LluIcon
                        className={'fas fa-paper-plane'}/></div>
                </div>
            </div>
        );
    }
}

export default LluMessage;