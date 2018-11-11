const OPEN_MODAL_REGISTER_TRAVELER_ONE = 'OPEN_MODAL_REGISTER_TRAVELER_ONE';
const CLOSE_MODAL_REGISTER_TRAVELER_ONE = 'CLOSE_MODAL_REGISTER_TRAVELER_ONE';

export const openModalRegisterTravelerOne = payload => ({
   type: OPEN_MODAL_REGISTER_TRAVELER_ONE,
   payload
});

export const closeModalRegisterTravelerOne = payload => ({
    type: CLOSE_MODAL_REGISTER_TRAVELER_ONE,
    payload
});

const initialState = {
    modal_is_open: false,
    is_open_class:false
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL_REGISTER_TRAVELER_ONE:
            return {
                modal_is_open: true,
                is_open_class: true
            };
        case CLOSE_MODAL_REGISTER_TRAVELER_ONE:
            return {
                modal_is_open: false,
                is_open_class: false
            };
        default:
            return state;
    }
};