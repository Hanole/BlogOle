import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJkNpoLe3aFVLU0YIjfpiFr_S34CTUQNo",
    authDomain: "blogole-ab08a.firebaseapp.com",
    projectId: "blogole-ab08a",
    storageBucket: "blogole-ab08a.firebasestorage.app",
    messagingSenderId: "595154835543",
    appId: "1:595154835543:web:d7a0cac644581b8f14ab12"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation, 
        });
      } catch (error) {
        console.log('error creating the user', error.message)
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async () => {
    console.log('Starting Firebase sign out...');
    await signOut(auth);
    console.log('Firebase sign out complete');
  };

  export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);