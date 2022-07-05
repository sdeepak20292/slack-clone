// import {firebase} from "firebase/app";
// import {firebase} from 'firebase/app';
// import { initializeApp } from 'firebase/app';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrmjKddyOq7DWHvjXbAiUPw11pZ3n0cY4",
  authDomain: "slack-c186f.firebaseapp.com",
  databaseURL: "https://slack-c186f-default-rtdb.firebaseio.com",
  projectId: "slack-c186f",
  storageBucket: "slack-c186f.appspot.com",
  messagingSenderId: "212554386060",
  appId: "1:212554386060:web:a719878668b8b38a8149a9",
  measurementId: "G-8ZZHY0MHWF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export { auth, provider };
// export default db;

// const firebaseApp = initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider };
// export default db;
