import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, set, setDoc, getDoc } from 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef)
  if (!snapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
}

