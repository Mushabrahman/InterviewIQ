import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-91ebf.firebaseapp.com",
  projectId: "interviewiq-91ebf",
  storageBucket: "interviewiq-91ebf.firebasestorage.app",
  messagingSenderId: "865592003133",
  appId: "1:865592003133:web:fee52bfb1b1f972cb17854",
  measurementId: "G-N0K777G9TC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}