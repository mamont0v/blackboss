import { createSelector } from 'reselect';

//Нужно всегда думать как данные должны двигаться (data flow)
//1) решить что за компонент
//2) решить состояние и где оно будет храниться
//3) что за измениния и когда измениться state


//if state у нас такой

// export const SHOP_DATA = [
//     {
//       id: 1,
//       title: 'Hats',
//       routeName: 'hats',
//       items: [
//         {

//то нужно будет сделать такую карту
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     women: 4,
//     mens: 5
// }

//если у нас есть ключ сразу 
//...
// export const SHOP_DATA = [
// hats:
//     {
//       id: 1,
//       title: 'Hats',

//то карта нам не нужна


const selectShop = state => state.shop; //from root reducer 'shop'


//Вместо этого теперь мы в collection-overview поместим ключи от store потому что у нас он объект а не array.
export const selectShopItems = createSelector(
    [selectShop],
    (shop) => shop.collections
);


export const selectCollection = collectionUrlParam => createSelector(
    [selectShopItems],

    //чтобы работало то нужно так оторбразить при карте
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])

    collections => collections ? collections[collectionUrlParam] : null) //data normalazation - is you store list of element as OBJECT instead of ARRAYS!!!
// и это быстрей чем через find выше выполнять поиск нужного элемента в store 


//после того как мы сделали из array в object у нас в colection-overview не получается выполнить .map. Для этого нужно нам конвертировать  наш объект в array

export const selectCollectionForPreview = createSelector(
    [selectShopItems],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)


export const selectCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)
