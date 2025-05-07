import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT3mIINf5WZxZKIDXWxNgMlOWEWOYMAw0",
  authDomain: "portfolio-50c7d.firebaseapp.com",
  projectId: "portfolio-50c7d",
  storageBucket: "portfolio-50c7d.firebasestorage.app",
  messagingSenderId: "801142336766",
  appId: "1:801142336766:web:58771e1e94389de6bd09af",
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };