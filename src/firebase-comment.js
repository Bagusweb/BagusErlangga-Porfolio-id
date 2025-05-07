import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDT3mIINf5WZxZKIDXWxNgMlOWEWOYMAw0",
    authDomain: "portfolio-50c7d.firebaseapp.com",
    projectId: "portfolio-50c7d",
    storageBucket: "portfolio-50c7d.firebasestorage.app",
    messagingSenderId: "801142336766",
    appId: "1:801142336766:web:58771e1e94389de6bd09af",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };