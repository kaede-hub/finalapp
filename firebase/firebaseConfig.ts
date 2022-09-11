// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB5KrasftjS-iZ2NFj_CFqNsn8MZuq7ziM",
  authDomain: "next-todo-6.firebaseapp.com",
  projectId: "next-todo-6",
  storageBucket: "next-todo-6.appspot.com",
  messagingSenderId: "498346052796",
  appId: "1:498346052796:web:f0f9a868faf73987b914b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();