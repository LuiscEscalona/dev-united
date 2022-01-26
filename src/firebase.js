import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgA-n1BTCEq80VmN3t2g_856nJkHfXAec",
  authDomain: "proyecto-prueba-e4ecd.firebaseapp.com",
  projectId: "proyecto-prueba-e4ecd",
  storageBucket: "proyecto-prueba-e4ecd.appspot.com",
  messagingSenderId: "27472755058",
  appId: "1:27472755058:web:dce97494f003c5916f05eb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export database functionality
export const firestore = firebase.firestore();

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const loginGoogle = () => auth.signInWithPopup(provider);

export const logout = () => auth.signOut();

// Export the firebase package for other uses
export default firebase;
