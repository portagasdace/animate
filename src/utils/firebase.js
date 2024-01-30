// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF1mv_ptuQXZQ4Z09a-uGXjlRSvXEgtn4",
  authDomain: "animate-75871.firebaseapp.com",
  projectId: "animate-75871",
  storageBucket: "animate-75871.appspot.com",
  messagingSenderId: "482616432961",
  appId: "1:482616432961:web:60a87def6571e4f41c29c0",
  measurementId: "G-MBDVYCF406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {
  analytics,
  logEvent
}