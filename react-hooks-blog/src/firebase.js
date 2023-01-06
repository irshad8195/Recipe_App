import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDf6xqeljdCjJ82lfpT-2-kB-JyaTUIh9M",
    authDomain: "react-hooks-blog-81b02.firebaseapp.com",
    projectId: "react-hooks-blog-81b02",
    storageBucket: "react-hooks-blog-81b02.appspot.com",
    messagingSenderId: "189945167823",
    appId: "1:189945167823:web:725b9e2636949a0cbd1cba"
  };
firebase.initializeApp(firebaseConfig);
export const firestore=firebase.firestore()

// // Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDf6xqeljdCjJ82lfpT-2-kB-JyaTUIh9M",
//   authDomain: "react-hooks-blog-81b02.firebaseapp.com",
//   projectId: "react-hooks-blog-81b02",
//   storageBucket: "react-hooks-blog-81b02.appspot.com",
//   messagingSenderId: "189945167823",
//   appId: "1:189945167823:web:725b9e2636949a0cbd1cba"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// 