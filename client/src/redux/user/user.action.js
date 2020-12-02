import UserActionTypes from './user.types';
//trigger action -> SET_CURRENT_USER


// User Reducer 
// {
//     currentUser:{...}
// }


//redux doing similar things to this.setState()

// export const setCurrentUser = user => ({
//     type: UserActionTypes.SET_CURRENT_USER,
//     payload: user
// });


//Google Sign Actions
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
});


//With Email Sign Actions
export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});


//Common success and failure for Google/Email sign in
export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});



export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});


//SIGN_OUT
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});


export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});


export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})



//SIGN_UP
export const signUpStart = (userCredentials) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials   
})


export const signUpSuccess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
})


export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})