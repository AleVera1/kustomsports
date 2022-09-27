import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
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
