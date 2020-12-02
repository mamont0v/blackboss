import React from 'react';
import BagItem from '../bag-item/bag-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectBagItems } from '../../redux/dropdown-cart-bag/bag.selector';
import { createStructuredSelector } from 'reselect';
import './dropdown-menu.styles.scss';
import {toggleBagMenu} from '../../redux/dropdown-cart-bag/bag.action';

const DropDownMenu = ({ bagItems, history, dispatch }) => {

    return (
    
    <div className='dropdown-menu'>

        {/* Условие проверки на пустой товар лучше сделать на весь bagItems s а не только в кнопке чтобы можно было манипулировать стилями в блоке товаров */}

        <div className='cart-items'>

            {bagItems.map(bagItem => {
                
                return (
                    <BagItem key={bagItem.id} item={bagItem} />
                )
            })}

        </div>
        {
            bagItems.length !== 0 ?
                <CustomButton onClick={
                    () => {
                        history.push('/checkout')
                        dispatch(toggleBagMenu())
                    }}>
                    ОФОРМИТЬ ЗАКАЗ
                </CustomButton> :
                <div style={{ color: 'black' }}>Ваша корзина пуста. Добавьте товар, чтобы оплатить.</div>
        }
    </div>
)}

const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems
})

export default withRouter(connect(mapStateToProps)(DropDownMenu))