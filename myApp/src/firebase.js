import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB2NBi6erydQksgo8kIKYv4NPh22gzLGOs",
  authDomain: "nutri-fit-bf9b8.firebaseapp.com",
  projectId: "nutri-fit-bf9b8",
  storageBucket: "nutri-fit-bf9b8.firebasestorage.app",
  messagingSenderId: "521242043596",
  appId: "1:521242043596:web:bfb8227a029d1602c50e69",
  measurementId: "G-70PMZ7JDBK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);