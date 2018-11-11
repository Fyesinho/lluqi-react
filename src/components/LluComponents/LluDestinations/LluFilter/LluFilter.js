import React, {Component} from 'react';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";

class LluFilter extends Component {
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
        const classCol = this.state.width > 800 ? 'col-4' : 'col-12';
        const {countries, cities, months, offers, activities} = this.props;
        return (
            <div className={`${classCol} mt-2 rounded`}
                 style={{height: 'auto', boxShadow: '1px -1px 20px 1px #c5c8d1'}}>
                <div className="flex pt-4">
                    <button onClick={this.props.onClick} className="btn btn-primary mr-3 filter"><LluIcon className="fas fa-check"/> Aplicar Filtros
                    </button>
                    <button onClick={this.props.onClickClean} className="btn btn-primary mr-3 filter"><LluIcon className="fas fa-times"/> Limpiar Filtros
                    </button>
                </div>
                <hr/>

                <div>
                    <h5 className="text-left"><LluIcon className="fas fa-sliders-h"/> Filtrar hostales por</h5>
                </div>
                <hr/>
                <div id="countries" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#country" aria-expanded="true"
                       aria-controls="pais">
                        <LluIcon className="fas fa-angle-up"/> País
                    </a>
                    <hr/>
                    <div className="panel-collapse collapse in text-left show" id="country">
                        {countries && countries.map(country => <div key={country.id} className="form-check">
                            <input onChange={this.props.onChange} className="form-check-input" type="checkbox" name='countries' id={country.id}/>
                            <label className="form-check-label">
                                {country.name}
                            </label>
                        </div>)}
                        <hr/>
                    </div>
                </div>
                <div id="cities" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#city" aria-expanded="true"
                       aria-controls="ciudad">
                        <LluIcon className="fas fa-angle-up"/> Ciudad
                    </a>
                    <hr/>
                    <div className="panel-collapse collapse in text-left show" id="city">
                        {cities && cities.map(city => <div key={city.id} className="form-check">
                            <input onChange={this.props.onChange} className="form-check-input" type="checkbox" name="cities" id={city.id}/>
                            <label className="form-check-label">
                                {city.city}
                            </label>
                        </div>)}
                        <hr/>
                    </div>
                </div>
                <div id="month" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#months" aria-expanded="false"
                       aria-controls="mes">
                        <LluIcon className="fas fa-angle-up"/> Meses disponibles
                    </a>
                    <hr/>
                    <div className="collapse text-left" id="months">
                        {months && months.map(month => <div key={month.id} className="form-check">
                            <input onChange={this.props.onChange} className="form-check-input" type="checkbox" name="months" id={month.id}/>
                            <label className="form-check-label">
                                {month.name}
                            </label>
                        </div>)}
                        <hr/>
                    </div>
                </div>
                <div id="cities" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#offers" aria-expanded="true"
                       aria-controls="ofrece">
                        <LluIcon className="fas fa-angle-up"/> Se ofrece a cambio
                    </a>
                    <hr/>
                    <div className="collapse text-left" id="offers">
                        {offers && offers.map(offer => <div key={offer.id} className="form-check">
                            <input onChange={this.props.onChange} className="form-check-input" type="checkbox" name='offers' id={offer.id}/>
                            <label className="form-check-label">
                                {offer.offer}
                            </label>
                        </div>)}
                        <hr/>
                    </div>
                </div>
                <div id="cities" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#tasks" aria-expanded="true"
                       aria-controls="tasks">
                        <LluIcon className="fas fa-angle-up"/> Tareas
                    </a>
                    <hr/>
                    <div className="collapse text-left" id="tasks">
                        {activities && activities.map(activity => <div key={activity.id} className="form-check">
                            <input onChange={this.props.onChange} className="form-check-input" type="checkbox" name='activities' id={activity.id}/>
                            <label className="form-check-label">
                                {activity.activity}
                            </label>
                        </div>)}

                        <hr/>
                    </div>
                </div>
                {/* <div id="cities" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#tiempo" aria-expanded="false"
                       aria-controls="tiempo">
                        <LluIcon className="fas fa-angle-up"/> Tiempo de ayuda
                    </a>
                    <hr/>
                    <div id="tiempo" className="collapse slidecontainer">
                        <p>Horas diarias de ayuda</p>
                        <div className="row pt-2">
                            <span className="text-left col-5">1 Hora</span>
                            <span className="text-right col-6">6 Horas</span>
                        </div>
                        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
                    </div>
                </div>*/}
            </div>
        );
    }
}

export default LluFilter;