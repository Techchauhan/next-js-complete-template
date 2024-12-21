import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyAkWZRhzex9xP-ZhAHKRsa8gyDchMIBs-A",
  authDomain: "prouto-5bde4.firebaseapp.com",
  projectId: "prouto-5bde4",
  storageBucket: "prouto-5bde4.firebasestorage.app",
  messagingSenderId: "1025962714761",
  appId: "1:1025962714761:web:8e50168afed08c8f604858",
  measurementId: "G-JRNJWEZ055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only if running in a browser environment)
let analytics: Analytics | undefined;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize Firestore, Storage, and Auth
const db: Firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, analytics, db, storage, auth };
