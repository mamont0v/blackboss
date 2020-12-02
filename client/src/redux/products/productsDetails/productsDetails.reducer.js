
import ProductsDetailsActionsTypes from './productsDetails.types';


const INITIAL_STATE = {
    product: {reviews: []}, 
    isFetching: null, //loading
    errorMessage: null
}

const productsDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductsDetailsActionsTypes.FETCH_PRODUCTS_DETAILS_START:
            return {
                ...state,
                isFetching: true,
            }

        case ProductsDetailsActionsTypes.FETCH_PRODUCTS_DETAILS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                product: action.payload
            }

        case ProductsDetailsActionsTypes.FETCH_PRODUCTS_DETAILS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export default productsDetailsReducer;