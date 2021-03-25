import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKkhNL8VS1pM0jABpK0Emcep0DTl3PzkQ",
  authDomain: "whatsapp-2-4d971.firebaseapp.com",
  projectId: "whatsapp-2-4d971",
  storageBucket: "whatsapp-2-4d971.appspot.com",
  messagingSenderId: "154163691538",
  appId: "1:154163691538:web:780b72f3086a8dbff2d8cb",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
