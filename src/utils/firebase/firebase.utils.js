import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ1aL-zCKjZostAfiszJ6TeFBPxiijmpU",
  authDomain: "ai-art-store.firebaseapp.com",
  projectId: "ai-art-store",
  storageBucket: "ai-art-store.appspot.com",
  messagingSenderId: "760174591077",
  appId: "1:760174591077:web:6e68afe00e1234c19e1a8c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};
