import React from 'react';

import { ReactComponent as ShopingCart } from '../../assets/reusable-shopping-bag-svgrepo-com.svg';
import { connect } from 'react-redux';
import { toggleBagMenu } from '../../redux/dropdown-cart-bag/bag.action.js';
import { selectBagItemsCount } from '../../redux/dropdown-cart-bag/bag.selector.js';
import { createStructuredSelector } from 'reselect';
import './shoping.styles.scss';


const ShopingBag = ({ toggleBagMenu, itemCount }) => (
    <div className='bag-full' onClick={toggleBagMenu}>
        <ShopingCart className='bag' />
        <span className='bag-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleBagMenu: () => dispatch(toggleBagMenu())
})


const mapStateToProps = createStructuredSelector({
    itemCount: selectBagItemsCount
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopingBag)