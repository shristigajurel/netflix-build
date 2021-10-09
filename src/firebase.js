import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhwxW0CpO0-F73T90dTl_u2yQ4khZJ-gs",
  authDomain: "netflix-build-9e997.firebaseapp.com",
  projectId: "netflix-build-9e997",
  storageBucket: "netflix-build-9e997.appspot.com",
  messagingSenderId: "707822628241",
  appId: "1:707822628241:web:84a117a1b6387d5fe9be30",
  measurementId: "G-ZD1PKSVNZV",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
