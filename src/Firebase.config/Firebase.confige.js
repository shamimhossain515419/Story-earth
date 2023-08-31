// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm9Uv6pyo29RevOETVlnZBac6AO2_4-Q0",
  authDomain: "story-earth.firebaseapp.com",
  projectId: "story-earth",
  storageBucket: "story-earth.appspot.com",
  messagingSenderId: "1089619576318",
  appId: "1:1089619576318:web:35cb034b46054b500c6caf",
  measurementId: "G-SPKGDR3DE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;