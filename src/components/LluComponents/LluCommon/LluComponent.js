import {Component} from 'react';

class LluComponent extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            isOpenClass: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true,
            isOpenClass: true
        })
    }

    closeModal() {
        this.setState({isOpenClass: false});
        setTimeout(() => {
            this.setState({
                modalIsOpen: false
            })
        }, 500);
    }

    closeAll(){
        const close = document.getElementsByClassName('close-element');
        Object.values(close).forEach((value) =>{
            value.click();
        })
    }
}


export default LluComponent;