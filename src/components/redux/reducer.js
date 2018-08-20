import {combineReducers} from 'redux';
import user from './modules/user/user';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    form: formReducer,
    user
});
