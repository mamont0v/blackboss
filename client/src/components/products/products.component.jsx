import React, { useState, useEffect } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import ProductCard from './productCard/Product-card.component';
import { listProducts } from '../../redux/products/products.actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../UI-components/Loader/Loader.component';

const Products = () => {
    // const {loading, data: { getPost:  posts} } = useQuery(FETCH_PRODUCTS_QUERY);

    const dispatch = useDispatch()

    const productList = useSelector(state => state.products)

    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            <h1>Все вещи</h1>
            {loading ? <Loader/> : error ? <h3>{error}</h3> :
                <div>
                    {products.map(product => {
                        return (
                            <div>
                                <div key={product._id}>
                                    <ProductCard product={product} />
                                </div>
                            </div>)

                    })}
                </div>
            }
        </div>
    )
}


// const FETCH_PRODUCTS_QUERY = gql`
//     {
//         getPosts {
//             id 
//             body 
//             createdAt 
//             username
//         }
//     }
// `



export default Products




