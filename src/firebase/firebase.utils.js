import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDGCyMCYBEaLlbsR1mMlJ9ULOUCWASKmWs",
  authDomain: "market-clother.firebaseapp.com",
  databaseURL: "https://market-clother.firebaseio.com",
  projectId: "market-clother",
  storageBucket: "market-clother.appspot.com",
  messagingSenderId: "1077911697799",
  appId: "1:1077911697799:web:da1ad4639caa68bbdd7b22",
  measurementId: "G-RB4RMKWBRQ"
};
// Initialize Firebase
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error', error.message);
    }
  }
  return userRef;
}





export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;