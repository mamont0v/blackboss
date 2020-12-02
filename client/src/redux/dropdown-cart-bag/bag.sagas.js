import { takeLatest, call, put, all } from 'redux-saga/effects';


import { clearBagAfterSignOut } from './bag.action';
import UserActionTypes from '../user/user.types'





export function* clearBagSignOut() {
    yield put(clearBagAfterSignOut());
}


export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearBagSignOut)
}


export function* bagSagas() {
    yield (all([call(onSignOutSuccess)]))
}