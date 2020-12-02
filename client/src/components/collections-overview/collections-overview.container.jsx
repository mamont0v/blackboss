import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import {compose} from 'redux'

import { selectCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../HOC/spinner/spinner.component';
import CollectionsOverview from './collection-overview.component'

const mapStateToProps = createStructuredSelector ({
    isLoading: selectCollectionFetching
})


const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer