// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBhPUNip-7GAI04kFen2XLRLtOFKvywIMs",
  authDomain: "web3ter-65465.firebaseapp.com",
  projectId: "web3ter-65465",
  storageBucket: "web3ter-65465.appspot.com",
  messagingSenderId: "136385938095",
  appId: "1:136385938095:web:c9b351fd7924258c628a5a",
  measurementId: "G-CXNTHCWGC0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };



