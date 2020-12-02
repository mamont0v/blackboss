import ProductsDetailsActionsTypes from './productsDetails.types'
import axios from 'axios';

export const listProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch( {type: ProductsDetailsActionsTypes.FETCH_PRODUCTS_DETAILS_START});
        
        const {data} = await axios.get(`/api/products/${id}`)

        dispatch({type:ProductsDetailsActionsTypes.FETCH_PRODUCTS_DETAILS_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: ProductsDetailsActionsTypes.FETCH_PRODUCTS_DETAILS_FAILURE, payload: error})
    }
}