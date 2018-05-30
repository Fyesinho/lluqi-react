import React, {Component} from 'react';
import LluIcon from "../../LluCommon/LluIcon/LluIcon";

class LluFilter extends Component {
    render() {
        return (
            <div className="col-4 mt-2 rounded" style={{height: 'auto', boxShadow: '1px -1px 20px 1px #c5c8d1'}}>
                <div className="flex pt-4">
                    <button className="btn btn-primary mr-3 filter"><LluIcon className="fas fa-check"/> Aplicar Filtros
                    </button>
                    <button className="btn btn-primary mr-3 filter"><LluIcon className="fas fa-times"/> Limpiar Filtros
                    </button>
                </div>
                <hr/>

                <div>
                    <h5 className="text-left"><LluIcon className="fas fa-sliders-h"/> Filtrar hostales por</h5>
                </div>
                <hr/>
                <div id="countries" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#pais" aria-expanded="true"
                       aria-controls="pais">
                        <LluIcon className="fas fa-angle-up"/> País
                    </a>
                    <hr/>
                    <div className="panel-collapse collapse in text-left" id="pais">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Chile
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Argentina
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Perú
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Colombia
                            </label>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div id="cities" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#ciudad" aria-expanded="true"
                       aria-controls="ciudad">
                        <LluIcon className="fas fa-angle-up"/> Ciudad
                    </a>
                    <hr/>
                    <div className="collapse text-left" id="ciudad">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Santiago (4)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Punta Arenas (3)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Valparaíso (6)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Cochamó (1)
                            </label>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div id="month" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#mes" aria-expanded="false"
                       aria-controls="mes">
                        <LluIcon className="fas fa-angle-up"/> Meses disponibles
                    </a>
                    <hr/>
                    <div className="collapse text-left" id="mes">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Enero
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Febrero
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Marzo
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Abril
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Mayo
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Junio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Julio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Agosto
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Septiembre
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Octubre
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Noviembre
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Diciembre
                            </label>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div id="cities" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#ofrece" aria-expanded="true"
                       aria-controls="ofrece">
                        <LluIcon className="fas fa-angle-up"/> Se ofrece a cambio
                    </a>
                    <hr/>
                    <div className="collapse text-left" id="ofrece">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Alojamiento (4)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Lavandería (3)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Desayuno (6)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Internet (1)
                            </label>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div id="cities" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#tareasb" aria-expanded="true"
                       aria-controls="tareasb">
                        <LluIcon className="fas fa-angle-up"/> Tareas básicas
                    </a>
                    <hr/>
                    <div className="collapse text-left" id="tareasb">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Recepción (4)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Limpieza (3)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Mantenimiento (6)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Jardinería (1)
                            </label>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div id="cities" className="text-left">
                    <a className="anchor-filter" data-toggle="collapse" href="#tarease" aria-expanded="true"
                       aria-controls="tarease">
                        <LluIcon className="fas fa-angle-up"/> Tareas básicas
                    </a>
                    <hr/>
                    <div className="collapse text-left" id="tarease">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Fotogrfía (4)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Artista (3)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Desarrollo Web/Blog (6)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="country_1"/>
                            <label className="form-check-label" v-for="country_1">
                                Turnos nocturnos (1)
                            </label>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div id="cities" className="text-left">
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
                </div>
            </div>
        )
    }
}

export default LluFilter;