import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Database
export const db = getFirestore();

// Adds store items info to firestore db
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// Gets products data from firestore db
export const getCategoriesAndDocuments = async function () {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// Creates a document with the logged user data
export const createUserDocumentFromAuth = async function (
  userAuth,
  additionalInformation = {}
) {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

// Provider for creating user with email and password
export const createAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Provider for sign in with email and password
export const signInAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Sign out provider
export const signOutUser = async function () {
  await signOut(auth);
};

//Observes and reacts whenever the user logs in or out: controlls the authentication
export const onAuthStateChangedListener = function (callback) {
  onAuthStateChanged(auth, callback);
};
