import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';


const logger = store => next => action => {
    // console.log('dispatching', action);
    const result = next(action);
    // console.log('next state', store.getState());
    return result;
};

export default createStore(reducer, applyMiddleware(logger, thunk));
