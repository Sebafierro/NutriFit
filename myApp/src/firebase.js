// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2NBi6erydQksgo8kIKYv4NPh22gzLGOs",
  authDomain: "nutri-fit-bf9b8.firebaseapp.com",
  projectId: "nutri-fit-bf9b8",
  storageBucket: "nutri-fit-bf9b8.firebasestorage.app",
  messagingSenderId: "521242043596",
  appId: "1:521242043596:web:bfb8227a029d1602c50e69",
  measurementId: "G-70PMZ7JDBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);