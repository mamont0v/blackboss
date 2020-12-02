
import ShopActonTypes from './shop.types';


const INITIAL_STATE = {
    collections: null, //SHOP_DATA - own list of state
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActonTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }

        case ShopActonTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case ShopActonTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export default shopReducer;