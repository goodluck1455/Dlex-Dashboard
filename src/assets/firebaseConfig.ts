// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf1NWB-oCaxx5JYzQDqsKsG5VuMRCERIk",
  authDomain: "authent-91481.firebaseapp.com",
  projectId: "authent-91481",
  storageBucket: "authent-91481.firebasestorage.app",
  messagingSenderId: "129575355566",
  appId: "1:129575355566:web:e9db442d7627785d22593f",
  measurementId: "G-CDS13GS8ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app);
