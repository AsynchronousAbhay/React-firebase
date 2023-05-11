// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCfz_Fi3W7eykBj-LwR78OZmQ-28lxrqC0",
    authDomain: "userauth-firebase-a0c8e.firebaseapp.com",
    projectId: "userauth-firebase-a0c8e",
    storageBucket: "userauth-firebase-a0c8e.appspot.com",
    messagingSenderId: "176893985360",
    appId: "1:176893985360:web:d9f0189eb1646c7161c755",
    measurementId: "G-DDW6K3BVCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth }