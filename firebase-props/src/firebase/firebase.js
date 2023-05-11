// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJTg1PUP68B-A-bOSfKl7Mdsh4NQx4qFU",
    authDomain: "fir-props-c628b.firebaseapp.com",
    projectId: "fir-props-c628b",
    storageBucket: "fir-props-c628b.appspot.com",
    messagingSenderId: "1043679123386",
    appId: "1:1043679123386:web:e21e78b832933a6ccaaf83",
    measurementId: "G-XFMBK17TBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;