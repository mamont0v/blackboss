import React, { useEffect } from 'react'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import CollectionsContainer from '../collections/collections.container';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <h1>Shop page</h1>
            <Route exact path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />

            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionsContainer}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage)