import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import qs from 'query-string';
import {Link} from 'react-router-dom';

import bienvenida from '../../../assets/images/bienvenida.png';

class LluWelcome extends Component {
    render() {
        const params = qs.parse(this.props.location.search);
        const user = JSON.parse(sessionStorage.getItem('user')) || {};
        return (
            <div className='container' style={{marginTop: 80}}>
                <div style={{fontFamily: 'Roboto Slab', textAlign: 'center', background: 'white'}}>
                    <h2 style={{marginTop: 20}}>Hola {user.name.split(' ')[0]}</h2>
                    <h1 style={{marginTop: 10}}>¡Muchas gracias por comprar en <b>LLuqi.com</b>!</h1>
                    <Row style={{marginTop: 10}}>
                        <Col md={12}>
                            Su pago realizado el día {params.processingDate} por {params.TX_VALUE} dolares por concepto de "{params.description}" fue exitoso y se envió una copia a {params.buyerEmail}.
                        </Col>
                    </Row>
                    <Row style={{marginTop: 10}}>
                        <Col lg={6} md={12}>
                            <Link to='/mi-perfil' style={{color: 'white', fontWight: 700}} className='btn btn-primary shadow'>¡Ir a mi
                                perfil!
                            </Link>
                        </Col>
                        <Col lg={6} md={12}>
                            <Link to='/destinos' style={{color: 'white', fontWight: 700}} className='btn btn-primary shadow'>¡Quiero
                                ver destinos ahora!
                            </Link>
                        </Col>
                    </Row>
                </div>
                <img src={bienvenida} style={{width: '100%'}} alt={'bienvenida'}/>
            </div>
        );
    }
}

export default LluWelcome;