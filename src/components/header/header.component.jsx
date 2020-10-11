import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../../src/assets/iconfinderstoreshopsaleshop4177575-115976_115939.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';




const Header = ({ currentUser }) => {
    return (
        <div className='header'>

            <Link to="/">
                <Logo className='logo' />
            </Link>
            {/* <div className='logo' style={{
                    backgroundImage: `url()`
                }} /> */}
            <div className='options'>
                <Link className='option' to="/shop">
                    {'магазин'.toUpperCase()}
                </Link>
                <Link className='option' to="/help">
                    {'помощь'.toUpperCase()}
                </Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>ВЫЙТИ</div>
                        :
                        <Link className='option' to='/sign-up'>ВОЙТИ</Link>
                }
            </div>
        </div>
    )
}

export default Header;