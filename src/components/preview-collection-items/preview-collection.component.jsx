import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

const CollectionPreview = ({ items, title }) => {
    return (
        <div className='preview-collections'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {items.map(({id, ...otherProps}) => (
                    <CollectionItem key={id} {...otherProps}/>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview