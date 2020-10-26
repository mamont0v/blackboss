import React from 'react';
import BagItem from '../bag-item/bag-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import {selectBagItems} from '../../redux/dropdown-cart-bag/bag.selector';
import {createStructuredSelector} from 'reselect';
import './dropdown-menu.styles.scss';

const DropDownMenu = ({ bagItems }) => (
    <div className='dropdown-menu'>
        <div className='cart-items'>
            {bagItems.map(bagItem => (
                <BagItem key={bagItem.id} item={bagItem} />
            ))}




        </div>
        <CustomButton>ОФОРМИТЬ ЗАКАЗ</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    bagItems:selectBagItems
})

export default connect(mapStateToProps)(DropDownMenu)