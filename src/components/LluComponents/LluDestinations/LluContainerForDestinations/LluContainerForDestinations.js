import React, {Component} from 'react';
import './LluContainerForDestinations.css';
import LluFilter from "../LluFilter/LluFilter";
import LluResult from "../LluResult/LluResult";
import {
    getActivities,
    getCities,
    getCountries,
    getFilterHostel,
    getMonths,
    getOffers
} from '../../LluCommon/LluApi/LluApi';

class LluContainerForDestinations extends Component {
    constructor() {
        super();
        this.state = {
            countries: [],
            cities: [],
            months: [],
            offers: [],
            activities: [],
            s_countries: [],
            s_cities: [],
            s_months: [],
            s_offers: [],
            s_activities: [],
            hostels: []
        };
        this.handlerOnClickFilterHostels = this.handlerOnClickFilterHostels.bind(this);
        this.handlerOnChangeFilterHostels = this.handlerOnChangeFilterHostels.bind(this);
        this.handlerOnClickCleanFilters = this.handlerOnClickCleanFilters.bind(this);
    }

    componentDidMount() {
        getCountries().then(response => {
            this.setState({
                countries: response.data
            });
        });

        getCities().then(response => {
            this.setState({
                cities: response.data
            });
        });

        getMonths().then(response => {
            this.setState({
                months: response.data
            });
        });

        getOffers().then(response => {
            this.setState({
                offers: response.data
            });
        });

        getActivities().then(response => {
            this.setState({
                activities: response.data
            });
        });

        getFilterHostel(0, 0, 0, 0, 0).then(response => {
            this.setState({
                hostels: response.data
            });
        });
    }

    handlerOnChangeFilterHostels({target}) {
        this.setState({
            [`s_${target.name}`]: target.checked ? this.state[`s_${target.name}`].concat(target.id) :
                this.state[`s_${target.name}`].filter(item => item !== target.id)
        });
    }

    handlerOnClickFilterHostels() {
        const {s_countries, s_cities, s_months, s_offers, s_activities} = this.state;
        getFilterHostel(s_countries.toString(), s_cities.toString(), s_months.toString(), s_offers.toString(), s_activities.toString()).then(response => {
            this.setState({
                hostels: response.data
            });
        });
    }

    handlerOnClickCleanFilters() {
        const checks = document.querySelectorAll('input[type="checkbox"]');
        checks.forEach(check => {
            if(!check.disabled) {
                check.checked = false;
            }
        });
        getFilterHostel(0, 0, 0, 0, 0).then(response => {
            this.setState({
                hostels: response.data
            });
        });
    }

    render() {
        return (
            <div style={{marginTop: 80}}>
                <div className="m-auto row container text-center llu-container-filter">
                    <LluFilter {...this.state} onChange={this.handlerOnChangeFilterHostels}
                               onClickClean={this.handlerOnClickCleanFilters}
                               onClick={this.handlerOnClickFilterHostels}/>
                    <LluResult hostelsData={this.state.hostels}/>
                </div>
            </div>
        );
    }
}

export default LluContainerForDestinations;