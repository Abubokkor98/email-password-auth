// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrQo96I4_j1iS4l_fWCbm1ckC4Ig1oPq4",
  authDomain: "email-password-auth-356c7.firebaseapp.com",
  projectId: "email-password-auth-356c7",
  storageBucket: "email-password-auth-356c7.firebasestorage.app",
  messagingSenderId: "630643386920",
  appId: "1:630643386920:web:07f3190a6817733fb0a31d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
