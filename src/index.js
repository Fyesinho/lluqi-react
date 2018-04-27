//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Screens
import LluHome from "./components/Screen/LluHome/LluHome";
//Assets
import './index.css';


const LluqiRouter = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={LluHome}/>
            </Switch>
        </div>
    </Router>;


ReactDOM.render(<LluqiRouter/>, document.getElementById('root'));
