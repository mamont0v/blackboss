import React from 'react';
import { Link } from 'react-router-dom';
//Apollo
//const ProductCard = ({ post: { id, body, username, createdAt } }) => {
import './Product-card.style.scss';

const ProductCard = ({ product }) => {
    console.log(product.image)
    return (
        <>
            <Link to={`/product/${product._id}`}>
            
                <div className="row">

                   
                    {/* <div className='image' style={{
                    backgroundImage: `url(../../../../../assets/images/${product.image})`
                }} /> */}
                    <img src = {`/images/${product.image}`} alt="not found"/>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </Link>
        </>
    )
}

export default ProductCard

