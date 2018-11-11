const OPEN_MODAL_REGISTER_TRAVELER_TWO = 'OPEN_MODAL_REGISTER_TRAVELER_TWO';
const CLOSE_MODAL_REGISTER_TRAVELER_TWO = 'CLOSE_MODAL_REGISTER_TRAVELER_TWO';

export const openModalRegisterTravelerTwo = payload => ({
   type: OPEN_MODAL_REGISTER_TRAVELER_TWO,
   payload
});

export const closeModalRegisterTravelerTwo = payload => ({
    type: CLOSE_MODAL_REGISTER_TRAVELER_TWO,
    payload
});

const initialState = {
    modal_is_open: false,
    is_open_class:false
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL_REGISTER_TRAVELER_TWO:
            return {
                modal_is_open: true,
                is_open_class: true
            };
        case CLOSE_MODAL_REGISTER_TRAVELER_TWO:
            return {
                modal_is_open: false,
                is_open_class: false
            };
        default:
            return state;
    }
};