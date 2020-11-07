import React from 'react';
import './collection-overview.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../preview-collection-items/preview-collection.component';



const CollectionsOverview = ({ collections }) => {
  
    // const { collections } = this.state;
    return (
        <div className='collection-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
            {/* (collection => ({id, item}) */}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)