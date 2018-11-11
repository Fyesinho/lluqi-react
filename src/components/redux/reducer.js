import {combineReducers} from 'redux';
import user from './modules/user/user';
import modalRegisterTraveler from './modules/modal_register_traveler/modal_register_traveler'
import modalRegisterTravelerTwo from './modules/modal_register_traveler/modal_register_traveler_step2'
import modalRegisterTravelerThree from './modules/modal_register_traveler/modal_register_traveler_step3'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    form: formReducer,
    user,
    modalRegisterTraveler,
    modalRegisterTravelerTwo,
    modalRegisterTravelerThree
});
