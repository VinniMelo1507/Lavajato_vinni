import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEUScmm9Nw7QqUiAe65uh24B_2ysE_B_s",
  authDomain: "lavajato-vinicius.firebaseapp.com",
  projectId: "lavajato-vinicius",
  storageBucket: "lavajato-vinicius.firebasestorage.app",
  messagingSenderId: "263689636831",
  appId: "1:263689636831:web:41813dc1b9951bca74926a",
};

// Initialize Firebase
if (!firebase.apps.lenght) {
  firebase.initializaApp(firebaseConfig)
}

const db = firebase.firestone();

export {
  firebase as default,
  db,
}
