// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5da42.firebaseapp.com",
  projectId: "mern-estate-5da42",
  storageBucket: "mern-estate-5da42.appspot.com",
  messagingSenderId: "350455569372",
  appId: "1:350455569372:web:c6ee89e98c1a16eaed4d19",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
