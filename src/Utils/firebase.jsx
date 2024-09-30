// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwtoB0bksQPLbSw334lbNZtAUiTT6zjuA",
  authDomain: "omkeshri-portfolio.firebaseapp.com",
  projectId: "omkeshri-portfolio",
  storageBucket: "omkeshri-portfolio.appspot.com",
  messagingSenderId: "221732327760",
  appId: "1:221732327760:web:5975055ac1c27649669c55",
  measurementId: "G-TG30XCLLE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);