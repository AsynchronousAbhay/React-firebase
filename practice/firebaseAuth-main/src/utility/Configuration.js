// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Nn0SfvocSJESyhnqs7aHOsPiMoqDwK8",
  authDomain: "fir-auth-af920.firebaseapp.com",
  projectId: "fir-auth-af920",
  storageBucket: "fir-auth-af920.appspot.com",
  messagingSenderId: "603032828894",
  appId: "1:603032828894:web:8041662a905b937586fb4f",
  measurementId: "G-N7ZSR08SSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
