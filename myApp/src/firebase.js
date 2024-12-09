import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2NBi6erydQksgo8kIKYv4NPh22gzLGOs",
  authDomain: "nutri-fit-bf9b8.firebaseapp.com",
  projectId: "nutri-fit-bf9b8",
  storageBucket: "nutri-fit-bf9b8.appspot.com",
  messagingSenderId: "521242043596",
  appId: "1:521242043596:web:bfb8227a029d1602c50e69",
  measurementId: "G-70PMZ7JDBK",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { db };
