// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvUTVfbZam8Jo-A-FqETj4TQhxRsyYBAs",
  authDomain: "kustomsports-90b83.firebaseapp.com",
  projectId: "kustomsports-90b83",
  storageBucket: "kustomsports-90b83.appspot.com",
  messagingSenderId: "1036712840447",
  appId: "1:1036712840447:web:cd1001b17cc611131290ca",
  measurementId: "G-RRPEL6CJ2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
