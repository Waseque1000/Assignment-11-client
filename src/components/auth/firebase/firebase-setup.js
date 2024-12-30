// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7O9jmbfgJtE_YxnwCBUUZcUw0hPamvR0",
  authDomain: "job-portal-0001.firebaseapp.com",
  projectId: "job-portal-0001",
  storageBucket: "job-portal-0001.firebasestorage.app",
  messagingSenderId: "37917938800",
  appId: "1:37917938800:web:0c77b7d89a807a72c5d0b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
