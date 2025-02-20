// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfhrZcLwnlscV8gLq4899033J8XMyl4Is",
  authDomain: "multirag-ai.firebaseapp.com",
  projectId: "multirag-ai",
  storageBucket: "multirag-ai.firebasestorage.app",
  messagingSenderId: "1014964380038",
  appId: "1:1014964380038:web:cd46cf8d635f678de10c07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;