import React from 'react'
import './collection-component.styles.scss'
import {connect} from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { ReactComponent as ShopingBag} from '../../assets/2849824-basket-buy-market-multimedia-shop-shopping-store_107977.svg'
import {addItem} from '../../redux/dropdown-cart-bag/bag.action'


const CollectionItem = ({ item, addItem }) => {
    const {name, price, imageUrl} = item
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick = {()=> addItem(item) } inverted><ShopingBag className ='shopbag'/></CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
