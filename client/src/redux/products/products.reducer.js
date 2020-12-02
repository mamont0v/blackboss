
import ProductsActionsTypes from './products.types';


const INITIAL_STATE = {
    products: [], 
    isFetching: null, //loading
    errorMessage: null
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductsActionsTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                isFetching: true,
                products:[] //not nessesary
            }

        case ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                products: action.payload
            }

        case ProductsActionsTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export default productsReducer;