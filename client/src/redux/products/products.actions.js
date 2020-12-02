import ProductsActionsTypes from './products.types';
import axios from 'axios';

export const fetchingProductsStart = () => ({
    type: ProductsActionsTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = products => ({
    type: ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchProductsFailure = errorMessage => ({
    type: ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS,
    payload: errorMessage
})


export const listProducts = () => async (dispatch) => {
    try {
        dispatch( {type: ProductsActionsTypes.FETCH_PRODUCTS_START});
        
        const {data} = await axios.get('/api/products')

        dispatch({type:ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: ProductsActionsTypes.FETCH_PRODUCTS_FAILURE, payload: error})
    }
}




