import React from 'react';
import LluComponent from "../../../LluComponents/LluCommon/LluComponent";
import LluModal from "../../../LluComponents/LluCommon/LluModal/LluModal";
import LluModalImageFormHostel from "../LluModalImageFormHostel/LluModalImageFormHostel";
import LluFormHostalStep1 from "../../../LluComponents/LluCommon/LluFormHostalStep1/LluFormHostalStep1";

class LluModalRegister extends LluComponent {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <LluModal directionLeft={this.props.directionLeft} className={this.state.width < 601 ? '': "llu-container"}
                      isOpenClass={this.props.isOpenClass}
                      isOpen={this.props.isOpen}>
                <div className="row" style={{marginLeft: 0, marginRight: 0}}>
                    <div style={{paddingLeft: 0, paddingRight: 0}} className= {this.state.width < 601 ? "col-12": "col-6"}>
                        <div className="llu-gradient">
                            <LluFormHostalStep1/>
                        </div>
                    </div>
                    {this.state.width < 601 ? null :
                        <div className="col-6">
                            <LluModalImageFormHostel closeModal={this.props.closeModal}/>
                        </div>
                    }
                </div>
            </LluModal>
        )
    }
}

export default LluModalRegister;