//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
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
import LluMyProfileSelect from './components/Screen/LluMyProfileSelect/LluMyProfileSelect';
import LluPrePago from './components/Screen/LluPrePago/LluPrePago';
import LluProfileHostel from './components/Screen/LLuProfileHostel/LluProfileHostel';
import LluQuienesSomos from './components/Screen/LluQuienesSomos/LluQuienesSomos';
import LluComoFunciona from './components/Screen/LluComoFunciona/LluComoFunciona';
import LluConfirmation from './components/Screen/LLuConfirmation/LluConfirmation';
import LluPostPago from './components/Screen/LluPostPago/LluPostPago';
import LluMyProfileEdit from './components/Screen/LluMyProfileEdit/LluMyProfileEdit';

const LluqiRouter = () =>
    <Provider store={store}>
        <Router>
            <div style={{background: '#e9e7e7'}}>
                <Switch>
                    <Route exact path='/' component={LluHome}/>
                    <Route path='/perfil/:name_profile' component={LluProfileSelect}/>
                    <Route path='/hostal/:id' component={LluProfileHostel}/>
                    <Route path='/mi-perfil/' component={LluMyProfileSelect}/>
                    <Route path='/mi-perfil-edit/' component={LluMyProfileEdit}/>
                    <Route path='/demo' component={DemoForm}/>
                    <Route path='/bitacora' component={LluBinnacle}/>
                    <Route path='/destinos/' component={LluDestinations}/>
                    <Route path='/chat' component={LluChat}/>
                    <Route path='/prepago' component={LluPrePago}/>
                    <Route path='/quienes-somos' component={LluQuienesSomos}/>
                    <Route path='/como-funciona' component={LluComoFunciona}/>
                    <Route path='/conformacion-pago' component={LluConfirmation}/>
                    <Route path='/postpago/:query' component={LluPostPago}/>
                </Switch>
            </div>
        </Router>
    </Provider>;


ReactDOM.render(<LluqiRouter/>, document.getElementById('root'));
