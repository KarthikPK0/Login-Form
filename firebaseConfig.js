import { initializeApp } from 'firebase/app';
 
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5FQ1A83s5L6XGWB47QvNMDFlbpH_Gdk8",
    authDomain: "loginpage-37c76.firebaseapp.com",
    projectId: "loginpage-37c76",
    storageBucket: "loginpage-37c76.appspot.com",
    messagingSenderId: "841770691668",
    appId: "1:841770691668:web:9855f25de2d466517491c1",
    measurementId: "G-SCBJQ4MNJW"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, provider, signInWithGoogle };
