import React, {Component} from 'react';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";
import {Link} from 'react-router-dom';

class LluHostels extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
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
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        const classCol = this.state.width > 600 ? 'col-3' : 'col-12';
        const classCol2 = this.state.width > 600 ? 'col-9' : 'col-12';
        const {hostel} = this.props;
        return (
            <Link to={`hostal/${hostel.id}`} className="mb-4" style={{cursor: 'pointer', color: 'inherit'}}>
                <div className="llu-result_hotel row" style={{boxShadow: '1px -1px 20px 1px #c5c8d1', marginTop: 10}}>
                    <div className={classCol} style={{paddingLeft: 0, paddingRight: 0}}>
                        <img src={hostel.main_picture} alt=""/>
                    </div>
                    <div className={classCol2} style={{paddingLeft: 0, paddingRight: 0}}>
                        {/*<div className="tag">NUEVO HOSTAL</div>*/}
                        <div className="row">
                            <div className="col_1 col-5 mt-3">
                                <h5>{hostel.name_hostel}</h5>
                                <p>{hostel.city.city}</p>
                                <p className="calificacion">Sin calificación</p>
                            </div>
                            <div className="col_2 col-6">
                                <p><LluIcon className="fas fa-user"/>({hostel.travelers_reciebed}) Viajeros de Lluqi.com recibidos</p>
                                <p><LluIcon className="fas fa-comments"/>(0) comentarios disponibles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default LluHostels;
