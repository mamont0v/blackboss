import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from '../../../../components/products/productCard/Product-card.component';
import Loader from '../../../../components/UI-components/Loader/Loader.component';

import { listProducts } from '../../../../redux/products/products.actions';
import "./products-overview.styles.scss"

const ProductsOverviewSection = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.products)

    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <section>
            <div className="container">
                <div className="container-title">
                    <h3>Посмотреть продукцию</h3>
                </div>
                <div>menu</div>
                {loading ? <Loader /> : error ? <h3>{error}</h3> :
                    <div className="row">
                        {products.map(product => {
                            return (
                                <div className="item" key={product._id}>
                                    <ProductCard product={product} />
                                </div>)
                        })}
                    </div>
                }
            </div>
        </section>
    )
}

export default ProductsOverviewSection;
