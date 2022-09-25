import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-d09f9.firebaseapp.com",
  projectId: "react-firebase-redux-d09f9",
  storageBucket: "react-firebase-redux-d09f9.appspot.com",
  messagingSenderId: "822761420223",
  appId: "1:822761420223:web:6256c84c5340be8c72dd0a",
});

export const auth = app.auth();
export default app;
