import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

import ShopActonTypes from './shop.types';

export function* fetchCollectionAsync() {
    // yield console.error('i\'M FIRED')


    try {
        const collectionRef = firestore.collection('collection');

        const snapshot = yield collectionRef.get();

        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)

        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }


    // collectionRef.get().then(snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

    //     //was a updateCollections
    //     dispatch(fetchCollectionsSuccess(collectionsMap));

    //     // console.error('collectionMap', collectionsMap)
    //     // this.setState({
    //     //     loading: false
    //     // })
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
}

export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActonTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    )
}


export function* shopSagas() {
    yield all([call(fetchCollectionStart)])
}