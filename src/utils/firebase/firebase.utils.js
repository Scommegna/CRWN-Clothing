import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Initial firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBE_G00lJqMxsZqWUaNqFoAWllB4ujuqIo",
  authDomain: "crwn-clothing-db-213a0.firebaseapp.com",
  projectId: "crwn-clothing-db-213a0",
  storageBucket: "crwn-clothing-db-213a0.appspot.com",
  messagingSenderId: "443211393198",
  appId: "1:443211393198:web:8a5c6d864cc4e66d10253f",
};

const firebaseApp = initializeApp(firebaseConfig);

// Google provider for login with google with popup
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Database
export const db = getFirestore();

// Creates a document with the logged user data
export const createUserDocumentFromAuth = async function (userAuth) {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};
