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

import { getFirestore, collection, getDocs } from "firebase/firestore";

collection(db, "users")

usersSnapshot.forEach(doc => {
    const user = doc.data();
    const row = document.createElement("tr");
    tbody.appendChild(row);
});
