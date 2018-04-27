import React, {Component} from 'react';
import Modal from 'react-modal';
import './LluModal.css';

Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = '';
Modal.defaultStyles.overlay.position = '';

class LluModal extends Component {

    render() {
        let direction = "";
        let directionVertical = "";
        if(this.props.directionLeft !== undefined) direction = this.props.directionLeft === true ? ' llu-modal--left': ' llu-modal--right';
        if(this.props.directionTop !== undefined) directionVertical = this.props.directionTop === true ? ' llu-modal--top': ' llu-modal--bottom';

        let classNameProps = this.props.className !== undefined ? this.props.className : "";
        let className = "";
        let classNameOverlay = "";
        if(this.props.isOpenClass){
            className = {
                base: 'llu-modal'+direction + directionVertical + " "+classNameProps,
                afterOpen: 'showModal',
                beforeClose: ''
            };
            classNameOverlay = {
                base: 'llu-modal--overlay',
                afterOpen: 'showOverlay',
                beforeClose: ''
            };
        }else{
            className = {
                base:  'llu-modal'+direction + directionVertical + " "+classNameProps,
                afterOpen: '',
                beforeClose: ''
            };
            classNameOverlay = {
                base: 'llu-modal--overlay',
                afterOpen: '',
                beforeClose: ''
            };
        }

        return (
            <Modal
                className={className}
                overlayClassName={classNameOverlay}
                isOpen={this.props.isOpen}>
                {this.props.children}
            </Modal>
        )
    }
}


export default LluModal;