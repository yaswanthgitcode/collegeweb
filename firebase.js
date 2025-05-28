import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your config here (replace with your actual values)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAts3B-PLGCIAd6F5SdLAEDJ92PgUMZVZI",
  authDomain: "collegewebsite-75f2e.firebaseapp.com",
  projectId: "collegewebsite-75f2e",
  storageBucket: "collegewebsite-75f2e.firebasestorage.app",
  messagingSenderId: "1070493768081",
  appId: "1:1070493768081:web:627a95539805e9e7bf2230",
  measurementId: "G-78LC2BG67K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
