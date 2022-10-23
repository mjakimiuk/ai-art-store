import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

const firebaseConfig = {
  apiKey: "AIzaSyCZ1aL-zCKjZostAfiszJ6TeFBPxiijmpU",
  authDomain: "ai-art-store.firebaseapp.com",
  projectId: "ai-art-store",
  storageBucket: "ai-art-store.appspot.com",
  messagingSenderId: "760174591077",
  appId: "1:760174591077:web:6e68afe00e1234c19e1a8c",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const db = getFirestore();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

export const createFireBaseUserWithEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signOutFireBaseUser = async () => {
  await signOut(auth);
};

export const createUserDocumentFomAuth = async (
  userAuth,
  additionalInformation = {}
) => {
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

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export { onAuthStateChanged };

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const newDocRef = doc(collectionRef, object.category.toLowerCase());
    batch.set(newDocRef, object);
  });
  return await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionKey = collection(db, "categories");
  const q = query(collectionKey);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { category, items } = docSnapshot.data();
    acc[category.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const getUserInfo = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth);
  const userSnapshot = await getDoc(userDocRef);
  return userSnapshot.data();
};
