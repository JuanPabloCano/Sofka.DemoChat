import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDx8nL-0Ay3Xf7izrtxBTzc5egLy21PUhM",
  authDomain: "sofka-chatdemo.firebaseapp.com",
  projectId: "sofka-chatdemo",
  storageBucket: "sofka-chatdemo.appspot.com",
  messagingSenderId: "899987281691",
  appId: "1:899987281691:web:9d943af40e035f42d065be"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();

