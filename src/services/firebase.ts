import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFzyDgEJ2QunnJKMbySfgR_zL88KSc-D0",
  authDomain: "some-users-db.firebaseapp.com",
  projectId: "some-users-db",
  storageBucket: "some-users-db.firebasestorage.app",
  messagingSenderId: "703194179021",
  appId: "1:703194179021:web:02ebc3c3c85a4a633a9084",
  measurementId: "G-1D3XPKTCPM"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }
