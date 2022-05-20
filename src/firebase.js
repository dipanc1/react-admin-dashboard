// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

export const auth = getAuth();