import React from 'react';
import LluLogo from "../LluMainHeader/LluLogo/LluLogo";
//Assets
import './LluFormHostalStep4.css'
import LluButton from "../LluButton/LluButton";
import LluComponent from "../LluComponent";
import LluIcon from "../LluIcon/LluIcon";
import LluModalRegisterParentStep5 from "../../../LluModals/LluModalsRegisterHostal/LluModalRegisterStep5/LluModalRegisterParentStep5";

class LluFormStep4 extends LluComponent {
    constructor() {
        super();
        this.state = {
            hoursByDay: 3,
            daysByWeek: 3,
            minimumWeeks: 1,
            maximumWeeks: 5
        };
        this.plusHour = this.plusHour.bind(this);
        this.plusDay = this.plusDay.bind(this);
        this.plusMinWeek = this.plusMinWeek.bind(this);
        this.plusMaxWeek = this.plusMaxWeek.bind(this);
        this.minusHour = this.minusHour.bind(this);
        this.minusDay = this.minusDay.bind(this);
        this.minusMinWeek = this.minusMinWeek.bind(this);
        this.minusMaxWeek = this.minusMaxWeek.bind(this);
    }


    plusHour(e) {
        e.preventDefault();
        this.setState({hoursByDay: parseInt(this.state.hoursByDay, 10) + 1});
    }

    plusDay() {
        this.setState({daysByWeek: parseInt(this.state.daysByWeek, 10) + 1});
    }

    plusMinWeek() {
        this.setState({minimumWeeks: parseInt(this.state.minimumWeeks, 10) + 1});
    }

    plusMaxWeek() {
        this.setState({maximumWeeks: parseInt(this.state.maximumWeeks, 10) + 1});
    }

    minusHour() {
        this.setState({hoursByDay: parseInt(this.state.hoursByDay, 10) - 1});
    }

    minusDay() {
        this.setState({daysByWeek: parseInt(this.state.daysByWeek, 10) - 1});
    }

    minusMinWeek() {
        this.setState({minimumWeeks: parseInt(this.state.minimumWeeks, 10) - 1});
    }

    minusMaxWeek() {
        this.setState({maximumWeeks: parseInt(this.state.maximumWeeks, 10) - 1});
    }

    render() {
        const hoursByDay = this.state.hoursByDay < 10 ? '0' + this.state.hoursByDay : this.state.hoursByDay;
        const daysByWeek = this.state.daysByWeek < 10 ? '0' + this.state.daysByWeek : this.state.daysByWeek;
        const minimumWeeks = this.state.minimumWeeks < 10 ? '0' + this.state.minimumWeeks : this.state.minimumWeeks;
        const maximumWeeks = this.state.maximumWeeks < 10 ? '0' + this.state.maximumWeeks : this.state.maximumWeeks;
        const calcHours = this.state.hoursByDay * this.state.daysByWeek;
        return [
            <div key="header" className="llu-header_form">
                <LluLogo/>
                <h2>Crear cuenta para Hostal</h2>
                <p>Aún puedes registrarte con Facebook o Google o crear una cuenta para hostal</p>
            </div>,
            <div key="body" className="llu-body_form">
                <div className="llu-gradient"/>
                {/*Correo*/}

                <div>
                    <label htmlFor="basic-url">¿Cuantas <b>horas al día</b> necesitas ayuda en el hostal?</label>
                    <div className="llu-contador-horas col-12 row">
                        <div className="col-6 half_numero">
                            <span className="numero">{hoursByDay}</span>
                            <span className="arrows">
                                <span onClick={this.plusHour}><i className="fas fa-angle-up pointer"/></span>
                                <span onClick={this.minusHour}><i className="fas fa-angle-down pointer"/></span>
                        </span>
                            <div style={{marginTop: '-15px', marginRight: '-10px'}}>Horas al día</div>
                        </div>
                        <div className="col-4 s_half_numero">
                            <LluIcon style={{color: "#ffb400"}} className="fas fa-exclamation-circle"/>
                            Recomendamos que no sean mas de 4 horas de ayuda al día
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '10px'}}>
                        <span className="checkbox-inline col-12">
                            <input type="checkbox" value=""/>Prefiero trabajo por meta cumplida
                        </span>
                    </div>
                </div>
                <hr style={{width: '80%'}}/>
                <div>
                    <label htmlFor="basic-url" style={{paddingBottom: '12px'}}>¿Cuantos días a la semana necesitas ayuda
                        en el hostal?</label>
                    <div className="llu-contador-horas col-12 row">
                        <div className="col-6 half_numero">
                            <span className="numero">{daysByWeek}</span>
                            <span className="arrows">
                                <span onClick={this.plusDay}><i className="fas fa-angle-up pointer"/></span>
                                <span onClick={this.minusDay}><i className="fas fa-angle-down pointer"/></span>
                        </span>
                            <div style={{marginTop: '-15px', marginRight: '-10px'}}>Días a la semana</div>
                        </div>

                        <div className="col-5 s_half_numero">
                            <LluIcon style={{color: "#ffb400"}} className="fas fa-exclamation-circle"/>
                            Recuerda que los viajeros prestan ayuda a cambio de alojamiento y necesitan descansar.
                            Recomendamos no exceder las 20 horas de ayuda semanal
                        </div>
                    </div>
                    <div style={{
                        padding: '8px', textAlign: 'center', border: '1px solid #ffb400',
                        margin: '20px 100px 0 100px'
                    }}>
                        Estas pidiendo {calcHours} horas de ayuda a la semana
                    </div>
                </div>
                <hr style={{width: '80%'}}/>
                <div>
                    <label htmlFor="basic-url" style={{paddingBottom: '12px'}}>Tiempos mínimos y máximos de estadía del
                        viajero en el hostal</label>
                    <div className="llu-contador-horas col-12 row">
                        <div className="col-6 half_numero">
                            <span className="numero">{minimumWeeks}</span>
                            <span className="arrows">
                                <span onClick={this.plusMinWeek}><i className="fas fa-angle-up pointer"/></span>
                                <span onClick={this.minusMinWeek}><i className="fas fa-angle-down pointer"/></span>
                        </span>
                            <div style={{marginTop: '-15px', marginRight: '-10px'}}>semanas de<br/>estadía mínima</div>
                        </div>

                        <div className="col-4 half_numero" style={{marginLeft: '10px'}}>
                            <span className="numero">{maximumWeeks}</span>
                            <span className="arrows">
                                <span onClick={this.plusMaxWeek}><i className="fas fa-angle-up pointer"/></span>
                                <span onClick={this.minusMaxWeek}><i className="fas fa-angle-down pointer"/></span>
                            </span>
                            <div style={{marginTop: '-15px', marginRight: '-10px'}}>semanas de<br/>estadía máxima</div>
                        </div>
                    </div>
                    {this.state.minimumWeeks > this.state.maximumWeeks ?
                    <div className="text-center">
                        <LluIcon style={{color: 'red', marginTop: '10px'}} className="fas fa-exclamation-triangle"/> La estadía mínima no
                        puede ser mayor a la estadía
                        máxima.
                    </div> : null}
                </div>
                <hr style={{width: '80%'}}/>
            </div>,
            <div key="button_next" className="col-12 text-center">
                <LluButton action={this.props.closeModal} className="btn" style={{
                    color: "#ffb400",
                    background: "transparent",
                    border: "2px solid #ffb400", marginRight: "5px"
                }}>{"<<Volver"}</LluButton>
                <LluModalRegisterParentStep5/>
            </div>,
            <hr key="separatpr"/>,
            <div id="login_form" key="login" className="col-12 text-center">
                <p>Ya tengo una cuenta en Lluqi, quiero <span>Iniciar sesión</span></p>
            </div>
        ]
    }
}

export default LluFormStep4;