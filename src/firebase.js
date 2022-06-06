// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "admin-dashboard-a7224.firebaseapp.com",
    projectId: "admin-dashboard-a7224",
    storageBucket: "admin-dashboard-a7224.appspot.com",
    messagingSenderId: "516412552505",
    appId: "1:516412552505:web:fdb3a435252fcbc92f24e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app)