import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import { signInSuccess,
     signInFailure, 
     signOutSuccess, 
     signOutFailure, 
     signUpFailure, 
     signUpSuccess } from './user.action';




export function* getSnapshotAndCreateUserProfile(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)

        const userSnapshot = yield userRef.get();

        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

    } catch (error) {
        yield put(signInFailure(error))
    }
}


//Google Sign
//createUserProfileDocument теперь вызывается тут потому что мы перенесли код из App.js в сагу 

export function* signInWithGoogle() {
    try {
        //Вся логика из App.js авторизации теперь тут
        const { user } = yield auth.signInWithPopup(googleProvider) //функцию поменстили в переменую для того чтобы знать что хранится в ней

        yield getSnapshotAndCreateUserProfile(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}


//Email Sign

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);

        yield getSnapshotAndCreateUserProfile(user)

    } catch (error) {
        yield put(signInFailure(error))
    }
}



export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}


export function* isUserAuthencticated() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return;

        yield getSnapshotAndCreateUserProfile(userAuth)

    } catch (error) {
        yield put(signInFailure(error))
    }
}


export function* checkUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthencticated)
}


export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}


export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
      

        yield put(signUpSuccess({ user, additionalData: { displayName } }))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield getSnapshotAndCreateUserProfile(user, additionalData)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}





export function* usersSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthencticated),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
        
    ]);
}