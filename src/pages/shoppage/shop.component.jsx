import React from 'react'
import CollectionsOverview from '../../components/collections-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import Collections from '../collections/collections.component';

const ShopPage = ({ match }) => (
        <div className='shop-page'>
            <h1>Shop page</h1>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            
            <Route path={`${match.path}/:collectionId`} component={Collections} />
        </div>
    )
 


export default ShopPage