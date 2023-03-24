// import "dotenv"
// import firebase from 'firebase'
// import { useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// apiKey: "AIzaSyDzkKGIclPyVQmtFMqQX1Pk0HzTciV16KA",
const apiKey=process.env.SECRET_KEY
const firebaseConfig={
    apiKey: apiKey,
  authDomain: "otp-verification-356f0.firebaseapp.com",
  projectId: "otp-verification-356f0",
  storageBucket: "otp-verification-356f0.appspot.com",
  messagingSenderId: "663698952279",
  appId: "1:663698952279:web:0aa25923bf63ef34669312",
  measurementId: "G-1TWBQH2LFF"
}

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};

