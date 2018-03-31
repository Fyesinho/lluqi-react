//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Screens
import LluHome from "./components/Screen/LluHome/LluHome";
//Functions
import {pageView} from "./components/LluComponents/Common/GiAnalytics/GiAnalytics";
//Assets
import './index.css';


const GiwerRouter = () =>
    <Router onUpdate={pageView()}>
        <div>
            <Switch>
                <Route exact path='/' component={LluHome}/>
                {/*<Route path='/product/:brand_product/:name_product' component={GiProductView}/>*/}
                {/*<Route path='/test' component={GetStarted}/>*/}
                {/*<Route component={GetStarted}/>*/}
            </Switch>
        </div>
    </Router>;


ReactDOM.render(<GiwerRouter/>, document.getElementById('root'));
