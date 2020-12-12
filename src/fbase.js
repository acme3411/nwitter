import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  console.log(process.env.REACT_APP_API_KEY);
  console.log(process.env.REACT_APP_AUTH_DOMAIN);
  console.log(process.env.REACT_APP_PROJECT_ID);
  console.log(process.env.REACT_APP_STORAGE_BUCKET);
  console.log(process.env.REACT_APP_MESSAGING_SENDER_ID);
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;
  export const authService = firebase.auth();
  export const dbService = firebase.firestore();

  /*
  apiKey: "AIzaSyAfVI0s_FaF4IiKTAEbH7q0fRV9mRfXTTg",
  authDomain: "nwitter-81abc.firebaseapp.com",
  projectId: "nwitter-81abc",
  storageBucket: "nwitter-81abc.appspot.com",
  messagingSenderId: "274250936465",
  appId: "1:274250936465:web:d8dd7a31c3f7fbc7ee0f30"
  */