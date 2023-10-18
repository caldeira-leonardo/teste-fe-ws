// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHamb8nLGcV2alaMgoGe9wS5EC3t2kBi0",
  authDomain: "teste-ws-fe.firebaseapp.com",
  projectId: "teste-ws-fe",
  storageBucket: "teste-ws-fe.appspot.com",
  messagingSenderId: "591479168743",
  appId: "1:591479168743:web:13353f6db3510b6f048c42",
  measurementId: "G-YN5TR90N22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
