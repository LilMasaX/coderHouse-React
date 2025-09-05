import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeQdMMBJV0qcrsP6Sx3JL7AZYwC-CWtnw",
  authDomain: "coderhouse-react-fbcca.firebaseapp.com",
  projectId: "coderhouse-react-fbcca",
  storageBucket: "coderhouse-react-fbcca.firebasestorage.app",
  messagingSenderId: "74928526578",
  appId: "1:74928526578:web:ea61f39be910c1d226ec6b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);