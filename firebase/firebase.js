// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 

import{getFirestore, collection} from 'firebase/firestore'
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA69GxjyK6nx0tg-UEKpLQkHKJxC2YENjc",
  authDomain: "moviwala-21f45.firebaseapp.com",
  projectId: "moviwala-21f45",
  storageBucket: "moviwala-21f45.appspot.com",
  messagingSenderId: "400003340032",
  appId: "1:400003340032:web:65918bd1d6cdd43fae45e5",
  measurementId: "G-EZF5MVLEHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const moviesRef = collection(db,"movies");
export default app;
