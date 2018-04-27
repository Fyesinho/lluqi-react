import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class LluGoogleMaps extends Component {
    constructor(){
        super();
        this.state = {
            center: {
                lat: 0,
                lng: -70
            },
            zoom: 2
        }
    }

    componentWillReceiveProps(newProps){
        if(this.state.center.lat !== newProps.center.lat || this.state.center.lng !== newProps.center.lng){
            this.getCoordinates(newProps.center.lat, newProps.center.lng);
        }
    }

    getCoordinates(lat, lng){
        this.setState({
            center: {
                lat,
                lng
            },
            zoom: 11
        });
    }

    render() {
        return (
            <div style={{height: '100vh', position: 'fixed', width: '40%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'}}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}>
                </GoogleMapReact>
            </div>
        );
    }
}

export default LluGoogleMaps;