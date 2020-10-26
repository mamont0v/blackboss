import {BagActionTypes} from './bag.types';

export const toggleBagMenu = () => ({
    type: BagActionTypes.TOGGLE_BAG_MENU
});

export const addItem = item => ({
    type: BagActionTypes.ADD_ITEM,
    payload: item
})
