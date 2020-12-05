import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProductsDetails } from '../../redux/products/productsDetails/productsDetails.actions';
import CustomButton from '../custom-button/custom-button.component';
import ShopingBag from '../shoping-cart/shoping.component';
import {addItem} from '../../redux/dropdown-cart-bag/bag.action'

const ProductDetails = ({ match, item }) => {
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productsDetails)
    
    const {product} = productDetails

    useEffect(() => {
        dispatch(listProductsDetails(match.params.id));
        
    }, [dispatch, match])

//     useEffect(() => {
//         dispatch(addItem(item));
        
//     }, [dispatch, item])
   
// console.error(productDetails)


    return (
        <>
            <h2>
            {/* <Link to='/products'>Назад</Link> */}
                <Link to='/'>Назад</Link>
            </h2>
            <div>
                <div>
                    <img src = {`/images/${product.image}`} alt="not found"/>
                    <p>{product.name}</p>
                    <br />
                    <p>{product.description}</p>
                </div>
                {/* <CustomButton onClick = {()=> addItem(item) } inverted></CustomButton> */}
            </div>
        </>
    )
}

export default ProductDetails;