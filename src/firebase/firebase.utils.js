import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
    apiKey: "AIzaSyASB1xMmKiWShoJ4QxgWdXxHSX6QH0JL0I",
    authDomain: "the40k-db.firebaseapp.com",
    projectId: "the40k-db",
    storageBucket: "the40k-db.appspot.com",
    messagingSenderId: "50962222831",
    appId: "1:50962222831:web:e6dd03b40dfdd9ecd2151a",
    measurementId: "G-40ZBP36MME"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;