// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRa_nfNRkrN-hoBnstooKM0kUgQjmsWN8",
    authDomain: "instagram-clone-d9557.firebaseapp.com",
    projectId: "instagram-clone-d9557",
    storageBucket: "instagram-clone-d9557.appspot.com",
    messagingSenderId: "240107279389",
    appId: "1:240107279389:web:fb751359dbb6e31d2d22f4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage }
