// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9c68e.firebaseapp.com",
  projectId: "mern-blog-9c68e",
  storageBucket: "mern-blog-9c68e.appspot.com",
  messagingSenderId: "181091572258",
  appId: "1:181091572258:web:897f77bd016b9d0eac487b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);