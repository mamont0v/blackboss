import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import {compose} from 'redux'

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

import Collections from './collections.component';
import WithSpinner from '../../components/HOC/spinner/spinner.component';


const mapStateToProps = createStructuredSelector ({
    isLoading: state => !selectIsCollectionLoaded(state)
})


const CollectionsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collections)

export default CollectionsContainer