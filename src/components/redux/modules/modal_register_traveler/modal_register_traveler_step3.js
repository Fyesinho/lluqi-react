const OPEN_MODAL_REGISTER_TRAVELER_THREE = 'OPEN_MODAL_REGISTER_TRAVELER_THREE';
const CLOSE_MODAL_REGISTER_TRAVELER_THREE = 'CLOSE_MODAL_REGISTER_TRAVELER_THREE';

export const openModalRegisterTravelerThree = payload => ({
   type: OPEN_MODAL_REGISTER_TRAVELER_THREE,
   payload
});

export const closeModalRegisterTravelerThree = payload => ({
    type: CLOSE_MODAL_REGISTER_TRAVELER_THREE,
    payload
});

const initialState = {
    modal_is_open: false,
    is_open_class:false
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL_REGISTER_TRAVELER_THREE:
            return {
                modal_is_open: true,
                is_open_class: true
            };
        case CLOSE_MODAL_REGISTER_TRAVELER_THREE:
            return {
                modal_is_open: false,
                is_open_class: false
            };
        default:
            return state;
    }
};