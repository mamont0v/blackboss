import React from 'react';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../../src/assets/iconfinderstoreshopsaleshop4177575-115976_115939.svg';
import { Link } from 'react-router-dom';


import ShopingBag from '../shoping-cart/shoping.component';
import DropDownMenu from '../dropdown-menu/dropdown-menu.component';

import {createStructuredSelector} from 'reselect'

import { connect } from 'react-redux';
import { selectBagHidden } from '../../redux/dropdown-cart-bag/bag.selector';
import {signOutStart } from '../../redux/user/user.action';
import { selectCurrentUser } from '../../redux/user/user.selector';



const Header = ({ currentUser, hidden,signOutStart }) => {
    return (
        <div className='header'>

            <Link to="/">
                <Logo className='logo' />
            </Link>
            {/* <div className='logo' style={{
                    backgroundImage: `url()`
                }} /> */}
            <div className='options'>
                <Link className='option' to="/products">
                    {'магазин'.toUpperCase()}
                </Link>
                <Link className='option' to="/help">
                    {'помощь'.toUpperCase()}
                </Link>
                {
                    currentUser ?
                        <div className='option' onClick={signOutStart}>ВЫЙТИ</div>
                        :
                        <Link className='option' to='/sign-up'>ВОЙТИ</Link>
                }
                <ShopingBag />
            </div> { hidden ? null : <DropDownMenu />}
        </div>
    )
}



const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectBagHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);