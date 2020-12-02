import React from 'react'
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import './collections.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';


const Collections = ({ collection }) => {

    const { title, items } = collection;
    return (
        <div className='collection' >
            <h2>{title}</h2>
            <div>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(Collections)