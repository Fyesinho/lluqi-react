import React from 'react';
import LluLogo from "../LluMainHeader/LluLogo/LluLogo";
//Assets
import './LluFormHostalStep5.css'
import LluButton from "../LluButton/LluButton";
import LluComponent from "../LluComponent";
import LluIcon from "../LluIcon/LluIcon";
import LluIconSelect from "../LluIconSelect/LluIconSelect";

class LluFormStep5 extends LluComponent {
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
                <label htmlFor="basic-url">Selecciona que tareas necesitas para tu hostal</label>
                <label htmlFor="basic-url">Tareas Básicas</label>
                <div className="input-group container">
                    <ul style={{width: '100%'}}>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Enero</LluIconSelect>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Febrero</LluIconSelect>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Marzo</LluIconSelect>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Abril</LluIconSelect>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Mayo</LluIconSelect>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Junio</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Julio</LluIconSelect>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Agosto</LluIconSelect>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Sept.</LluIconSelect>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Octubre</LluIconSelect>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Nov.</LluIconSelect>
                        <LluIconSelect from="hostel2" className="pointer fas fa-calendar-alt">Dic.</LluIconSelect>
                    </ul>
                </div>
                <div className="row" style={{marginTop: '10px'}}>
                        <span className="checkbox-inline col-12">
                            <input type="checkbox" value=""/>Tengo disponibles todos los meses del año
                        </span>
                </div>
                <hr style={{marginBottom: 0, marginTop: 0, width: '70%'}}/>
                <label htmlFor="basic-url">Tareas Específicas</label>
                <div className="input-group container">
                    <ul style={{width: '100%'}}>
                        <LluIconSelect from="hostel" className="pointer fas fa-bed">Alojamiento</LluIconSelect>
                        <LluIconSelect from="hostel" className="pointer fas fa-utensils">Desayuno</LluIconSelect>
                        <LluIconSelect from="hostel" className="pointer fas fa-utensils">Almuerzo</LluIconSelect>
                        <LluIconSelect from="hostel" className="pointer fas fa-utensils">Cena</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <LluIconSelect from="hostel" className="pointer fas fa-shopping-basket">Lavandería</LluIconSelect>
                        <LluIconSelect from="hostel" className="pointer fas fas fa-wifi">Internet</LluIconSelect>
                        <LluIconSelect from="hostel" className="pointer fas fa-tv">TV Cable</LluIconSelect>
                        <LluIconSelect from="hostel" className="pointer fas fa-blind">Tour incluido</LluIconSelect>
                    </ul>
                    <ul style={{width: '100%'}}>
                        <div>
                            <span>Otros</span>
                            <textarea className="form-control" placeholder="Yoga..."/>
                        </div>
                    </ul>
                </div>
            </div>,
            <div key="button_next" className="col-12 text-center">
                <LluButton action={this.props.closeModal} className="btn" style={{
                    color: "#ffb400",
                    background: "transparent",
                    border: "2px solid #ffb400", marginRight: "5px"
                }}>{"<<Volver"}</LluButton>
                <LluButton key="llu-modal_register_button" action={this.closeAll} className="btn btn-primary shadow">
                    Finalizar
                </LluButton>
            </div>,
            <hr key="separatpr"/>,
            <div id="login_form" key="login" className="col-12 text-center">
                <p>Ya tengo una cuenta en Lluqi, quiero <span>Iniciar sesión</span></p>
            </div>
        ]
    }
}

export default LluFormStep5;