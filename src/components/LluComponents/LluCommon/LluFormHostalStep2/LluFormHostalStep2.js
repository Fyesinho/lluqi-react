import React, {Component} from 'react';
import LluIcon from "../LluIcon/LluIcon";
import LluLogo from "../LluMainHeader/LluLogo/LluLogo";
import LluButton from "../LluButton/LluButton";
import LluModalRegisterParentStep3 from "../../../LluModals/LluModalsRegisterHostal/LluModalRegisterStep3/LluModalRegisterParentStep3";
import LluIconSelect from "../LluIconSelect/LluIconSelect";
import LluGoogleMaps from "../../../LluComponents/LluCommon/LluGoogleMaps/LluGoogleMaps";

class LluFormHostalStep2 extends Component {
    constructor(){
        super();
        this.state = {
            center: {
                lat: 10,
                lng: -70
            },
            zoom: 11
        }
    }


    render() {
        return (
            <div className="row" style={{marginLeft: 0, marginRight: 0}}>
                <div className="col-6">
                    <div className="llu-gradient">
                        <div key="header" className="llu-header_form">
                            <LluLogo/>
                            <h2>Crear cuenta para Hostal</h2>
                            <p>Aún puedes registrarte con Facebook o Google o crear una cuenta para hostal</p>
                        </div>
                        ,
                        <div key="body" className="llu-body_form">
                            <div className="llu-gradient"/>
                            {/*Nombre Hostal*/}
                            <label htmlFor="basic-url">Nombre del hostal</label>
                            <div className="input-group container">
                                <div className="input-group-prepend">
                                    <LluIcon className="fas fa-home"/>
                                </div>
                                <input placeholder="Columba Hostel" type="text" className="llu-input_form"/>
                                <div className="input-group-append">
                                    *
                                </div>
                            </div>
                            <span className="llu-span_form_right">Serás identificado en Lluqi.com con este nombre</span>
                            {/*Sitio Web*/}
                            <label htmlFor="basic-url">Sitio Web</label>
                            <div className="input-group container">
                                <div className="input-group-prepend">
                                    <LluIcon className="fas fa-globe"/>
                                </div>
                                <input placeholder="www.columbahostel.com" type="text" className="llu-input_form"/>
                                <div className="input-group-append">
                                    *
                                </div>
                            </div>
                            <span className="llu-span_form_right">***</span>
                            <hr style={{width: '80%', marginTop: 0, marginBottom: 0}}/>
                            {/*Seleccion*/}
                            <label htmlFor="basic-url" style={{marginBottom: '10px'}}>Tu hostal es perfecto si el
                                viajero
                                busca...</label>
                            <div className="input-group container">
                                <ul style={{width: '100%'}}>
                                    <LluIconSelect from='hostel' className="pointer fas fa-shield-alt">Barrio
                                        Histórico</LluIconSelect>
                                    <LluIconSelect from='hostel'
                                                   className="pointer fab fa-pagelines">Naturaleza</LluIconSelect>
                                    <LluIconSelect from='hostel' className="pointer fas fa-tree">Bosques</LluIconSelect>
                                    <LluIconSelect from='hostel' className="pointer far fa-sun">Playa</LluIconSelect>
                                </ul>
                                <ul style={{width: '100%'}}>
                                    <LluIconSelect from='hostel' className="pointer fas fa-users">Ambiente
                                        Familiar</LluIconSelect>
                                    <LluIconSelect from='hostel' className="pointer fas fa-thumbs-up">Comunidad
                                        Social</LluIconSelect>
                                    <LluIconSelect from='hostel'
                                                   className="pointer fas fa-smile">Fiestas</LluIconSelect>
                                    <LluIconSelect from='hostel' className="pointer fas fa-bicycle">Deporte
                                        Aventura</LluIconSelect>
                                </ul>
                                <ul style={{width: '100%'}}>
                                    <div>
                                        <span>Otros</span>
                                        <textarea className="form-control" placeholder="Yoga..."/>
                                    </div>
                                </ul>
                            </div>
                            {/*Direccion*/}

                            <label htmlFor="basic-url">Dirección</label>
                            <div className="input-group container">
                                <div className="input-group-prepend">
                                    <LluIcon className="fas fa-map-marker-alt"/>
                                </div>
                                <input placeholder="Calle Valparaiso 618, Viña del Mar" type="text"
                                       className="llu-input_form"/>
                                <div className="input-group-append">
                                    <LluIcon className="fas fa-search"/>
                                </div>
                            </div>
                        </div>,
                        <div key="button_next" className="col-12 text-center">
                            <LluButton action={this.props.closeModal} className="btn" style={{
                                color: "#ffb400",
                                background: "transparent",
                                border: "2px solid #ffb400", marginRight: "5px"
                            }}>{"<<Volver"}</LluButton>
                            <LluModalRegisterParentStep3/>
                        </div>,
                        <hr key="separatpr"/>,
                        <div id="login_form" key="login" className="col-12 text-center">
                            <p>Ya tengo una cuenta en Lluqi, quiero <span>Iniciar sesión</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <LluGoogleMaps center={this.state.center} zoom={this.state.zoom}/>
                </div>
            </div>
        )
    }
}

export default LluFormHostalStep2;