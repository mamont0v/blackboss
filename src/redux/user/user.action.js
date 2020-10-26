import {UserActionTypes} from './user.types';
//trigger action -> SET_CURRENT_USERRR

// {
//     type: String,
//     payload: any
// }


// User Reducer 
// {
//     currentUser:{...}
// }


//redux doing similar things to this.setState()

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

