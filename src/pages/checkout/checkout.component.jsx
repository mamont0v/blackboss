import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectBagItems, selectBagTotal } from '../../redux/dropdown-cart-bag/bag.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ bagItems, total }) => {
    return (
        <div className='checkout-main'>
            <div className='checkout-header'>
                <span>Товар</span>
            </div>
            <div className='checkout-header'>
                <span>Описание</span>
            </div>
            <div className='checkout-header'>
                <span>Количество</span>
            </div>
            <div className='checkout-header'>
                <span>Цена</span>
            </div>
            <div className='checkout-header'>
                <span>Удалить</span>
            </div>
            {
                bagItems.map(bagItem => <CheckoutItem key ={bagItem.id} bagItem ={bagItem}/>)
            }
            <div className='checkout-header'>
                <span>Общая сумма: ${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems,
    total: selectBagTotal
})

export default connect(mapStateToProps)(CheckoutPage)