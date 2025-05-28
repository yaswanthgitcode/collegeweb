// admin.js

// ✅ Firebase CDN imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// ✅ Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAts3B-PLGCIAd6F5SdLAEDJ92PgUMZVZI",
    authDomain: "collegewebsite-75f2e.firebaseapp.com",
    projectId: "collegewebsite-75f2e",
    storageBucket: "collegewebsite-75f2e.firebasestorage.app",
    messagingSenderId: "1070493768081",
    appId: "1:1070493768081:web:627a95539805e9e7bf2230",
    measurementId: "G-78LC2BG67K"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Load users from "faculty" collection
async function loadUsers() {
    const tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = "";

    try {
        const snapshot = await getDocs(collection(db, "faculty")); // ✅ correct collection
        console.log("Docs fetched:", snapshot.size);

        snapshot.forEach(doc => {
            const user = doc.data();
            console.log("User:", user);

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><button class="delete-btn" onclick="alert('Delete coming soon')">Delete</button></td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// ✅ Call function after page load
loadUsers();
