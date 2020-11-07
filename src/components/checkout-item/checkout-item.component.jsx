import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemFromBag, removeItem } from '../../redux/dropdown-cart-bag/bag.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({ bagItem, clearItem, addItem, removeItem}) => {
    const { name, imageUrl, price, quantity } = bagItem
    return (
        <div className='checkout-list'>
            <div className='image-box'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>removeItem(bagItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=>addItem(bagItem)}>&#10095;</div>
            </span>
            <div className='remove-icon' onClick={() => clearItem(bagItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromBag(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)