// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOuy9s3EgT_mFjVPHpH1djObznEBUVQmA",
    authDomain: "xavishop-635f4.firebaseapp.com",
    projectId: "xavishop-635f4",
    storageBucket: "xavishop-635f4.appspot.com",
    messagingSenderId: "662795970000",
    appId: "1:662795970000:web:7044030cbca91d8b3345d5",
    measurementId: "G-MTMQGGCQ1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);