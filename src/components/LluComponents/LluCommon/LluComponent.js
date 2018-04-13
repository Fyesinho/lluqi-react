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
}


export default LluComponent;