// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDy-gs6DWpGTArfqFcSKyxzhEkfesfHztA",
    authDomain: "wedding-website-as.firebaseapp.com",
    projectId: "wedding-website-as",
    storageBucket: "wedding-website-as.firebasestorage.app",
    messagingSenderId: "495416686686",
    appId: "1:495416686686:web:baf4499c2cd950eb5a1ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
