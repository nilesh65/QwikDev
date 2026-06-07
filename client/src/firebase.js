// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "qwikdev-2daa1.firebaseapp.com",
  projectId: "qwikdev-2daa1",
  storageBucket: "qwikdev-2daa1.firebasestorage.app",
  messagingSenderId: "613505195864",
  appId: "1:613505195864:web:556da5e9de65205875cf2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}