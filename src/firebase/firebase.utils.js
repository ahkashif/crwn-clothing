import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
const firebaseConfig = {
  apiKey: 'AIzaSyC_rZYAKMMKvD5RhDWWvHWwHyptI6ZH8WA',
  authDomain: 'crwn-db-f3abd.firebaseapp.com',
  projectId: 'crwn-db-f3abd',
  storageBucket: 'crwn-db-f3abd.appspot.com',
  messagingSenderId: '1006764292659',
  appId: '1:1006764292659:web:73b3b57d1a040a5b0a0146',
  measurementId: 'G-WD540SG51Z'
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
}

