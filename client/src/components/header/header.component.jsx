import React from 'react';
import './header.styles.scss';

// import { ReactComponent as Logo } from '../../../src/assets/iconfinderstoreshopsaleshop4177575-115976_115939.svg';

// import { Link } from 'react-router-dom';


// import ShopingBag from '../shoping-cart/shoping.component';
// import DropDownMenu from '../dropdown-menu/dropdown-menu.component';


import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
// import { selectBagHidden } from '../../redux/dropdown-cart-bag/bag.selector';
import { signOutStart } from '../../redux/user/user.action';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, WrapIconHeader, OptionLink, NavigationContainer, WrapHeaderMobile, LogoLink, IconHeaderItem, GeneralContainer, IconHeaderItemMenu } from './header.styles';
import { selectNavHidden } from '../../redux/navbar/nav.selector'

// import ShopingList from '../shoping-list/shoping-list.component'

import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';
// import {List} from '@styled-icons/bootstrap/List';

import HamburgerMenu from '../hamburger-menu/hamburger-menu.component';

// currentUser, hidden, signOutStart, 
const Header = ({ isHidden }) => {
    return (
        <HeaderContainer>
            <GeneralContainer>
                <WrapHeaderMobile>
                    <NavigationContainer>
                        <LogoContainer>
                            <LogoLink to='/'>BLACKBOSS</LogoLink>
                        </LogoContainer>
                        {/* <div className='logo' style={{
                    backgroundImage: `url()`
                }} /> */}

                        <WrapIconHeader>
                            <IconHeaderItem>
                                <OptionLink to="/products">
                                    {'магазин'.toUpperCase()}
                                </OptionLink>
                            </IconHeaderItem>
                            <IconHeaderItem>
                                <OptionLink to="/help">
                                    {'помощь'.toUpperCase()}
                                </OptionLink>
                            </IconHeaderItem>
                            <IconHeaderItem>
                                <OptionLink to="/blog">
                                    {'блог'.toUpperCase()}
                                </OptionLink>
                            </IconHeaderItem>
                            <IconHeaderItem>
                                <OptionLink to="/blog">
                                    {'отзывы'.toUpperCase()}
                                </OptionLink>
                            </IconHeaderItem>
                            <IconHeaderItem>
                                <OptionLink to="/chekout" style={{ color: "black", fontWeight: 1000 }}>
                                    {' заказать +7-777-77-77'.toUpperCase()} <Whatsapp size="22px" />
                                </OptionLink>

                            </IconHeaderItem>
                            {/* {
                        currentUser ?
                            <OptionDiv onClick={signOutStart}>ВЫЙТИ</OptionDiv>
                            :
                            <OptionDiv to='/sign-up'>ВОЙТИ</OptionDiv>
                    } */}
                            {isHidden ? null : <div>КНОПКА</div>}
                            {/* </div>
                    {/* <ShopingBag /> */}
                            <IconHeaderItemMenu>
                                <HamburgerMenu/>
                            </IconHeaderItemMenu>

                        </WrapIconHeader>
                        {/* {hidden ? null : <DropDownMenu />} */}
                        {/* </div> */}
                    </NavigationContainer>
                </WrapHeaderMobile>
            </GeneralContainer>
        </HeaderContainer>

    )
}



const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    // hidden: selectBagHidden, //корзина
    isHidden: selectNavHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

