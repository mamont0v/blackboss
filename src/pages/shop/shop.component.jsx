import React from 'react'
import CollectionPreview from '../../components/preview-collection-items/preview-collection.component.jsx';
import { SHOP_DATA } from './shop.data.js';

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                <h1>Shop page</h1>
                {collections.map(collection => (
                    <CollectionPreview {...collection} />

                ))}
                {/* (collection => ({id, item}) */}
            </div>
        )
    }
}

export default ShopPage