//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Screens
import LluHome from "./components/Screen/LluHome/LluHome";
//Assets
import './index.css';
import LluProfileSelect from "./components/Screen/LluProfileSelect/LluProfileSelect";
import LluBinnacle from "./components/Screen/LluBinnacle/LluBinnacle";
import LluDestinations from "./components/Screen/LluDestinations/LluDestinations";
import LluChat from "./components/Screen/LluChat/LluChat";

const LluqiRouter = () =>
    <Router>
        <div style={{background: '#e9e7e7'}}>
            <Switch>
                <Route exact path='/' component={LluHome}/>
                <Route path='/profile/:name_profile' component={LluProfileSelect}/>
                <Route path='/bitacora' component={LluBinnacle}/>
                <Route path='/destinos' component={LluDestinations}/>
                <Route path='/mensajes' component={LluChat}/>
            </Switch>
        </div>
    </Router>;


ReactDOM.render(<LluqiRouter/>, document.getElementById('root'));
