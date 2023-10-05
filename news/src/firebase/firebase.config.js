// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAbptj0rh0gA1IlrX47epOqI4GgMjd7ms",
  authDomain: "daily-news-c62c9.firebaseapp.com",
  projectId: "daily-news-c62c9",
  storageBucket: "daily-news-c62c9.appspot.com",
  messagingSenderId: "656836370977",
  appId: "1:656836370977:web:bf80a394d2ad5354b8f960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth } from "firebase/auth";
const auth = getAuth(app);
export default auth;