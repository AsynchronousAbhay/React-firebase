// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdWXimrCrtXrC7w2AiCgihb3cHnEVdmpU",
  authDomain: "fir-authentication-9929f.firebaseapp.com",
  projectId: "fir-authentication-9929f",
  storageBucket: "fir-authentication-9929f.appspot.com",
  messagingSenderId: "945159453723",
  appId: "1:945159453723:web:0a605b42b692846bacccbe",
  measurementId: "G-BJ554QY0WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;