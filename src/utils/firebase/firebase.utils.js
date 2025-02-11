import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

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
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt 
        });
      } catch (error) {
        console.log('error creating the user', error.message)
      }
    }
    return userDocRef;
  }