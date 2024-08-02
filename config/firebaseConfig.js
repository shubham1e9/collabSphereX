// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "firestoreapp-9c9a8.firebaseapp.com",
  projectId: "firestoreapp-9c9a8",
  storageBucket: "firestoreapp-9c9a8.appspot.com",
  messagingSenderId: "155601781782",
  appId: "1:155601781782:web:786f9a79e54894a2dc6137",
  measurementId: "G-EC0M4Q3M7T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);