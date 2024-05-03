
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqkTAVG20cv0jMJwiO5glY6zdg4k6hgh0",
  authDomain: "nasaapi-cee5f.firebaseapp.com",
  projectId: "nasaapi-cee5f",
  storageBucket: "nasaapi-cee5f.appspot.com",
  messagingSenderId: "763760373864",
  appId: "1:763760373864:web:e782f55c48049a35d10bdd",
  measurementId: "G-L7LNM6HBLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {auth, firestore, storage };