import React from 'react';
import { Link } from 'react-router-dom';
//Apollo
//const ProductCard = ({ post: { id, body, username, createdAt } }) => {
const ProductCard = ({ product }) => {
    return (
        <>
            
            <Link to={`/product/${product._id}`}>
                <div style={{ border: "1px solid white" }}>

                    <p>{product.name}</p>
                    <p>{product.brand}</p>
                    <img src={product.image} alt="1" />
                    <p>{product.description}</p>

                </div>
            </Link>
        </>
    )
}

export default ProductCard

