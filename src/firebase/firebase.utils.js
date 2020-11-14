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
  if (!userAuth) return;

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


//-----Created a Reference Document Object to our firebase store --- 
//QueryReference (references) and QuerySnapshot 
//we are run this manually in App.js
//it doesn't matter
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  
  const batch = firestore.batch();
  objectsToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc(); //obj.title названия разделов
    batch.set(newDocRef, obj)
  })

  return await batch.commit();
}
//---------------------------------

//--
export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map( doc => {
    const {title, items} = doc.data();
    
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accum, collection) => {
    accum[collection.title.toLowerCase()] = collection;
    return accum;
  }, {})
}


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject) 
  })
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);



export default firebase;