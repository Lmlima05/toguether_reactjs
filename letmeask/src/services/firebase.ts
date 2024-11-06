import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDzJW2hor5T9HVvh1LTTxwlylBDNGw-U0k",
  authDomain: "letmeask-8e486.firebaseapp.com",
  databaseURL: "https://letmeask-8e486-default-rtdb.firebaseio.com",
  projectId: "letmeask-8e486",
  storageBucket: "letmeask-8e486.firebasestorage.app",
  messagingSenderId: "717919311496",
  appId: "1:717919311496:web:d81aa8392dc153cfc0313d"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
