import React from 'react';

import { connect } from 'react-redux';

import {toggleNavigation} from '../../redux/navbar/navbar.action';

import {List} from '@styled-icons/bootstrap/List';

import './shoping-list.styles.scss';

const ShopingList = ({ toggleNavigation}) => (
    <div className='bag' onClick={toggleNavigation}>
        <List />
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleNavigation: () => dispatch(toggleNavigation())
})


export default connect(null, mapDispatchToProps)(ShopingList)