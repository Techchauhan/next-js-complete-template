// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCRpbjlOOFq-zNosIenM85tAvDVuF-f3T4",
  authDomain: "prouto-bc339.firebaseapp.com",
  projectId: "prouto-bc339",
  storageBucket: "prouto-bc339.firebasestorage.app",
  messagingSenderId: "9871468978",
  appId: "1:9871468978:web:21a576cfb491b60eb65cab",
  measurementId: "G-V62C759097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only if running in a browser environment)
let analytics: Analytics | undefined;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize Firestore and Storage
const db: Firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, analytics, db, storage,auth };
