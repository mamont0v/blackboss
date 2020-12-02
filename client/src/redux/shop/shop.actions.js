import ShopActonTypes from './shop.types';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => ({
    type: ShopActonTypes.FETCH_COLLECTIONS_START
})


export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActonTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})


export const fetchCollectionsFailure = message => ({
    type: ShopActonTypes.FETCH_COLLECTIONS_FAILURE,
    payload: message
})



// export const fetchCollectionsSuccessAsync = (collectionsMap) => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collection');

//         dispatch(fetchCollectionsStart());

//         //Было до использования промиса
//         // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {

//         //get() = onSnapshot

//         //способ 2) 
//         // fetch('https://firestore.googleapis.com/v1/projects/market-clother/databases/(default)/')
//         // .then(res => res.json())
//         // .then(collections => console.log(collections))

//         collectionRef.get().then(snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

//             //was a updateCollections
//             dispatch(fetchCollectionsSuccess(collectionsMap));

//             // console.error('collectionMap', collectionsMap)
//             // this.setState({
//             //     loading: false
//             // })
//         }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
//     }
// }


export const updateCollections = (collectionMap) => ({
    type: ShopActonTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})



