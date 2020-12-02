import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios'
import { fetchProductsSuccess, fetchProductsFailure } from './products.actions'
import ProductsActionsTypes from './products.types'

function* fetchingProductsAsync() {
    try {
        const {products} = yield axios.get('/api/products')
        // No need for if here, the saga will catch an error if the previous call failed
        yield put(fetchProductsSuccess(products.products))
        
    } catch (error) {
        yield put(fetchProductsFailure(error.errorMessage))
    }
}

export function* fetchingProductsSuccess() {
    yield takeLatest(ProductsActionsTypes.FETCH_COLLECTIONS_START, fetchingProductsAsync)
}


export function* productsSagas() {
    yield all([
        call(fetchingProductsSuccess)
    ]);
}



//redux thunk
// export const listProducts = () => async (dispatch) => {
//     try {
//         dispatch( {type: ProductsActionsTypes.FETCH_PRODUCTS_START});
        
//         const {products} = await axios.get('/api/products')

//         dispatch({type:ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS, payload: products})

//     } catch (error) {
//         dispatch({type: ProductsActionsTypes.FETCH_PRODUCTS_FAILURE, payload: error})
//     }
// }



