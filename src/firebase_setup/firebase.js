import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignout,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA2xhc_aA8mWuYU34zqEO5AyRztSZpKPZ4",
  authDomain: "my-project-1531702898498.firebaseapp.com",
  databaseURL: "https://my-project-1531702898498-default-rtdb.firebaseio.com",
  projectId: "my-project-1531702898498",
  storageBucket: "my-project-1531702898498.appspot.com",
  messagingSenderId: "38039037147",
  appId: "1:38039037147:web:47d089daa5c016f81298fe",
  measurementId: "G-SBPW7H55B0",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await addDoc(collection(db, "users"), { uid: user.uid, email: user.email });
    return true;
  } catch (error) {
    return { error: error.message };
  }
};
const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return true;
  } catch (error) {
    return { error: error.message };
  }
};
const signOut = async () => {
  try {
    await firebaseSignout(auth);
    return true;
  } catch (error) {
    return false;
  }
};
export { app, signUp, signIn, signOut };
