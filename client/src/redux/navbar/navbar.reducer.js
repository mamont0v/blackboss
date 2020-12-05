import { NavigationTypes } from './navbar.types';


const INITIAL_STATE = {
    isHidden: true,
}

const navigationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NavigationTypes.TOGGLE_NAVIGATION:
            return {
                ...state,
                isHidden: !state.isHidden
            };
        default:
            return state;
    }
}

export default navigationReducer