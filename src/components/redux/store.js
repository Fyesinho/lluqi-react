import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    // console.log('dispatching', action);
    const result = next(action);
    // console.log('next state', store.getState());
    return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger, thunk)
);

export default createStore(reducer, enhancer);
