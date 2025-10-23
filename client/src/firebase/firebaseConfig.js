import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEZn11k6bOAc-jNsB2aHu9vT5_edDSlUE",
  authDomain: "houston-airport-transport.firebaseapp.com",
  projectId: "houston-airport-transport",
  storageBucket: "houston-airport-transport.firebasestorage.app",
  messagingSenderId: "666991521246",
  appId: "1:666991521246:web:2cd10ea93f16238a7e414f",
  measurementId: "G-N01RX0RPL7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Firestore database
