// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTGEDfmvQ2AgZ9uSdZzIpX-fH07ZY47r0",
  authDomain: "music-store-84a78.firebaseapp.com",
  projectId: "music-store-84a78",
  storageBucket: "music-store-84a78.firebasestorage.app",
  messagingSenderId: "287424808334",
  appId: "1:287424808334:web:35028f68602234fb5710df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
