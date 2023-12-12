import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAtbkt-76DO8SNrpAw1lPb9YchtYvOMhA",
  authDomain: "react-ezequielservia.firebaseapp.com",
  projectId: "react-ezequielservia",
  storageBucket: "react-ezequielservia.appspot.com",
  messagingSenderId: "951442999899",
  appId: "1:951442999899:web:0da41f65119851957dcd7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
