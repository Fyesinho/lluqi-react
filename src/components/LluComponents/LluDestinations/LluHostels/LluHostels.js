import React, {Component} from 'react';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";

class LluHostels extends Component {
    render() {
        return (
            <div className="mb-2">
                <div className="llu-result_hotel row" style={{boxShadow: '1px -1px 20px 1px #c5c8d1'}}>
                    <div className="col-3" style={{paddingLeft: 0, paddingRight: 0}}>
                        <img src="https://q-ec.bstatic.com/images/hotel/max1024x768/468/46871800.jpg" alt=""/>
                    </div>
                    <div className="col-9" style={{paddingLeft: 0, paddingRight: 0}}>
                        <div className="tag">NUEVO HOSTAL</div>
                        <div className="row">
                            <div className="col_1 col-5">
                                <h5>Columba Hostel</h5>
                                <p>Valparaíso, Chile</p>
                                <p className="calificacion">Sin calificación</p>
                            </div>
                            <div className="col_2 col-6">
                                <p><LluIcon className="fas fa-user"/>(0) Viajeros de Lluqi.com recibidos</p>
                                <p><LluIcon className="fas fa-comments"/>(0) comentarios disponibles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LluHostels;
