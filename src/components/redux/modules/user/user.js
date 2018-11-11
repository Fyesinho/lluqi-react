import {registerUser} from "./api";

const SET_USER = 'SET_USER';

export const setUserRegister =
    ({username, email, password, genero, telefono, fechaNacimiento = '1992-12-30'}) => dispatch => registerUser(username, email, password, genero, telefono, fechaNacimiento).then(response => dispatch({
            type: SET_USER,
            user: response
        })
    );

const initialState = {
    user: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}