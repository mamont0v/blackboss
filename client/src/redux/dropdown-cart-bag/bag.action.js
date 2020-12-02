import {BagActionTypes} from './bag.types';

export const toggleBagMenu = () => ({
    type: BagActionTypes.TOGGLE_BAG_MENU
});

export const addItem = item => ({
    type: BagActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: BagActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromBag = item => ({
    type: BagActionTypes.CLEAR_ITEM_FROM_BAG,
    payload: item
});


export const clearBagAfterSignOut = () => ({
    type: BagActionTypes.CLEAR_BAG_AFTER_SIGNOUT
})
