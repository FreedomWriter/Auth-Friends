import firebase from "firebase/app";
import "firebae/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBtRGXHxBnU0l_zbK6HbIJEwz2V9bWuow0",
  authDomain: "friends-ae832.firebaseapp.com",
  databaseURL: "https://friends-ae832.firebaseio.com",
  projectId: "friends-ae832",
  storageBucket: "friends-ae832.appspot.com",
  messagingSenderId: "51950605498",
  appId: "1:51950605498:web:a6e13b4e78c573dc2e9e83",
  measurementId: "G-JEVK92K890"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const sighInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
