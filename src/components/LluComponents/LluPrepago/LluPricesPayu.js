import React, {Component} from 'react';
import backgroundImage from '../../../../src/assets/images/image.png';
import md5 from 'md5';

class LluPricesPayu extends Component {
    render() {
        const HTTP_PAYU = 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/';

        // const HTTP_PAYU = 'https://checkout.payulatam.com/ppp-web-gateway-payu/';
        // const merchantID = '661169';
        // const accountId = '663733';
        // const apiKey = 'GAM92dN2D3wAQ4s1S5fCLYwBR0';
        // const referenceCode = `Viajero pro ${Date.now()}`;
        // const amountPro = '29';
        // const amountProPlus = '59';
        // const amountGold = '99';
        // const currency = 'USD';

        const merchantID = '508029';
        const accountId = '512325';
        const apiKey = '4Vj8eK4rloUd272L48hsrarnUA';
        const referenceCode = `Viajero pro ${Date.now()}`;
        const amountPro = '29';
        const amountProPlus = '59';
        const amountGold = '1';
        const currency = 'USD';

        console.log(referenceCode);
        console.log(md5(`${apiKey}~${merchantID}~${referenceCode}~${amountPro}~${currency}`));
        return (
            <div className='container' style={{marginTop: 80}}>
                <div className="row pt-4" style={{
                    backgroundImage: `url("${backgroundImage}")`,
                    height: 656
                }}>
                    <div className="col-12">
                        <section className="pricing py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card mb-5 mb-lg-0">
                                            <div className="card-body"
                                                 style={{border: '5px solid #e28880', backgroundColor: '#fdf6f6'}}>
                                                <h3 style={{color: '#e28880'}}
                                                    className="card-title text-uppercase text-center">Viajeros</h3>
                                                <h2 style={{color: '#e28880', fontWeight: 700}}
                                                    className="card-title text-uppercase text-center">PRO</h2>
                                                <ul className="fa-ul">
                                                    <li style={{fontWeight: 700}}>
                                                        USD <span style={{fontSize: 46}}>29</span> /Anual <span
                                                        style={{fontWeight: 100}}>*Renov. Anual</span>
                                                    </li>
                                                    <li>
                                                        <span className="fa-li">
                                                            <i className="fas fa-check"/>
                                                        </span>
                                                        <span style={{
                                                            color: '#e28880',
                                                            fontWeight: 700
                                                        }}>5 viajes al año</span>
                                                    </li>
                                                    <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check"/>
                                                </span>
                                                        <span style={{
                                                            fontWeight: 700
                                                        }}>
                                                            Acceso a todos los destinos
                                                        </span>
                                                    </li>
                                                    <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check"/>
                                                </span>
                                                        <span style={{
                                                            fontWeight: 700
                                                        }}>
                                                            Acceso a chat con anfitriones
                                                        </span>
                                                    </li>
                                                </ul>
                                                <form method="post" action={HTTP_PAYU}>
                                                    <input name="merchantId" type="hidden" value={merchantID}/>
                                                    <input name="accountId" type="hidden" value={accountId}/>
                                                    <input name="description" type="hidden"
                                                           value="Venta en línea Viajero Pro"/>
                                                    <input name="referenceCode" type="hidden" value={referenceCode}/>
                                                    <input name="amount" type="hidden" value={amountProPlus}/>
                                                    <input name="currency" type="hidden" value={currency}/>
                                                    <input name="signature" type="hidden"
                                                           value={md5(`${apiKey}~${merchantID}~${referenceCode}~${amountPro}~${currency}`)}/>
                                                    <input name="test" type="hidden" value="1"/>
                                                    <input name="buyerEmail" type="hidden"
                                                           value="rodrigo.gonzalez.zura@gmail.com"/>
                                                    <input name="responseUrl" type="hidden"
                                                           value="http://localhost:3000/#/postpago/response"/>
                                                    <input name="confirmationUrl" type="hidden"
                                                           value="https://yahoo.com"/>
                                                    <input style={{
                                                        backgroundColor: '#e28880',
                                                        color: 'white',
                                                        border: 'none'}}
                                                           type="submit"
                                                           value="Voy Pro"
                                                           className='btn btn-block btn-primary text-uppercase'>
                                                    </input>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card mb-5 mb-lg-0">
                                            <div className="card-body"
                                                 style={{border: '5px solid #4cbea6', backgroundColor: '#f5fbfa'}}>
                                                <h3 style={{color: '#4cbea6'}}
                                                    className="card-title text-uppercase text-center">viajeros</h3>
                                                <h2 style={{color: '#4cbea6', fontWeight: 700}}
                                                    className="card-title text-uppercase text-center">pro +</h2>
                                                <ul className="fa-ul">
                                                    <li style={{fontWeight: 700}}>
                                                        USD <span style={{fontSize: 46}}>59</span> /Anual <span
                                                        style={{fontWeight: 100}}>*Renov. Anual</span>
                                                    </li>
                                                    <li>
                                                        <br/>
                                                    </li>
                                                    <li>
                                                        <span className="fa-li">
                                                            <i className="fas fa-check"/>
                                                        </span>
                                                        <span style={{
                                                            color: '#4cbea6',
                                                            fontWeight: 700
                                                        }}>Viajes ilimitados al año</span>
                                                    </li>
                                                    <li style={{fontWeight: 700}}>
                                                        <span className="fa-li">
                                                            <i className="fas fa-check"/>
                                                        </span>
                                                        Acceso a todos los destinos.
                                                    </li>
                                                    <li style={{fontWeight: 700}}>
                                                        <span className="fa-li">
                                                            <i className="fas fa-check"/>
                                                        </span>
                                                        Acceso a chats con anfitriones.
                                                    </li>
                                                </ul>
                                                <form method="post" action={HTTP_PAYU}>
                                                    <input name="merchantId" type="hidden" value={merchantID}/>
                                                    <input name="accountId" type="hidden" value={accountId}/>
                                                    <input name="description" type="hidden"
                                                           value="Venta en línea Viajero Pro +"/>
                                                    <input name="referenceCode" type="hidden" value={referenceCode}/>
                                                    <input name="amount" type="hidden" value={amountPro}/>
                                                    <input name="currency" type="hidden" value={currency}/>
                                                    <input name="signature" type="hidden"
                                                           value={md5(`${apiKey}~${merchantID}~${referenceCode}~${amountProPlus}~${currency}`)}/>
                                                    <input name="test" type="hidden" value="1"/>
                                                    <input name="buyerEmail" type="hidden"
                                                           value="rodrigo.gonzalez.zura@gmail.com"/>
                                                    <input name="responseUrl" type="hidden"
                                                           value="http://localhost:3000/#/postpago/response"/>
                                                    <input name="confirmationUrl" type="hidden"
                                                           value="https://yahoo.com"/>
                                                    <input name="Submit"
                                                           style={{
                                                               backgroundColor: '#4cbea6',
                                                               color: 'white',
                                                               border: 'none'
                                                           }}
                                                           className='btn btn-block btn-primary text-uppercase'
                                                           type="submit"
                                                           value="Voy Pro +"/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card mb-5 mb-lg-0">
                                            <div className="card-body"
                                                 style={{border: '5px solid #fdd355', backgroundColor: '#fffcf6'}}>
                                                <h3 style={{color: '#fdd355'}}
                                                    className="card-title text-uppercase text-center">viajeros</h3>
                                                <h2 style={{color: '#fdd355', fontWeight: 700}}
                                                    className="card-title text-uppercase text-center">gold</h2>
                                                <ul className="fa-ul">
                                                    <li style={{fontWeight: 700}}>
                                                        USD <span style={{fontSize: 40}}>99</span> /Anual <span
                                                        style={{fontWeight: 100}}>*Renov. Anual</span>
                                                    </li>
                                                    <li>
                                                        <br/>
                                                    </li>
                                                    <li style={{fontWeight: 700}}>
                                                        <span className="fa-li">
                                                            <i className="fas fa-check"/>
                                                        </span>
                                                        <span style={{color: '#fdd355'}}>Viajes ilimitados al año</span>
                                                    </li>
                                                    <li style={{fontWeight: 700}}>
                                                        <span className="fa-li">
                                                            <i className="fas fa-check"/>
                                                        </span>
                                                        Acceso a todos los destinos.
                                                    </li>
                                                    <li style={{fontWeight: 700}}>
                                                        <span className="fa-li">
                                                            <i className="fas fa-check"/>
                                                        </span>
                                                        Acceso a chats con anfitriones.
                                                    </li>
                                                    <li style={{fontWeight: 700}}>
                                                        <span className="fa-li">
                                                            <i className="fas fa-check"/>
                                                        </span>
                                                        Asistencia Médica/Equipaje
                                                    </li>
                                                    <li style={{fontWeight: 700}}>
                                                        <span className="fa-li">
                                                            <i className="fas fa-check"/>
                                                        </span>
                                                        Credencia Viajero: <span style={{
                                                        color: '#fdd355',
                                                        fontWeight: 700
                                                    }}>Dsctos & Beneficios</span> en
                                                        +125.000 destinos.
                                                    </li>
                                                </ul>
                                                <form method="post"
                                                      action={HTTP_PAYU}>
                                                    <input name="merchantId" type="hidden" value={merchantID}/>
                                                    <input name="accountId" type="hidden" value={accountId}/>
                                                    <input name="description" type="hidden"
                                                           value="Venta en línea Viajero Gold"/>
                                                    <input name="referenceCode" type="hidden" value={referenceCode}/>
                                                    <input name="amount" type="hidden" value={amountGold}/>
                                                    <input name="currency" type="hidden" value={currency}/>
                                                    <input name="signature" type="hidden"
                                                           value={md5(`${apiKey}~${merchantID}~${referenceCode}~${amountGold}~${currency}`)}/>
                                                    <input name="test" type="hidden" value="1"/>
                                                    <input name="buyerEmail" type="hidden"
                                                           value="rodrigo.gonzalez.zura@gmail.com"/>
                                                    <input name="responseUrl" type="hidden"
                                                           value="http://localhost:3000/#/postpago/response"/>
                                                    <input name="confirmationUrl" type="hidden"
                                                           value="https://yahoo.com"/>
                                                    <input name="Submit"
                                                           style={{
                                                               backgroundColor: '#fdd355',
                                                               color: 'white',
                                                               border: 'none'
                                                           }}
                                                           className='btn btn-block btn-primary text-uppercase'
                                                           type="submit"
                                                           value="Proximamente"/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default LluPricesPayu;