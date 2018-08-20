//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './components/redux/store';
//Screens
import LluHome from "./components/Screen/LluHome/LluHome";
import LluProfileSelect from "./components/Screen/LluProfileSelect/LluProfileSelect";
import LluBinnacle from "./components/Screen/LluBinnacle/LluBinnacle";
import LluDestinations from "./components/Screen/LluDestinations/LluDestinations";
import LluChat from "./components/Screen/LluChat/LluChat";
//Assets
import './index.css';
import DemoForm from "./components/LluComponents/LluDemo/LluDemo";

const LluqiRouter = () =>
    <Provider store={store}>
        <Router>
            <div style={{background: '#e9e7e7'}}>
                <Switch>
                    <Route exact path='/' component={LluHome}/>
                    <Route path='/profile/:name_profile' component={LluProfileSelect}/>
                    <Route path='/demo' component={DemoForm}/>
                    <Route path='/bitacora' component={LluBinnacle}/>
                    <Route path='/destinos' component={LluDestinations}/>
                    <Route path='/mensajes' component={LluChat}/>
                </Switch>
            </div>
        </Router>
    </Provider>;


ReactDOM.render(<LluqiRouter/>, document.getElementById('root'));
