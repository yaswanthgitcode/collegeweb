import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAts3B-PLGCIAd6F5SdLAEDJ92PgUMZVZI",
  authDomain: "collegewebsite-75f2e.firebaseapp.com",
  projectId: "collegewebsite-75f2e",
  storageBucket: "collegewebsite-75f2e.appspot.com",
  messagingSenderId: "1070493768081",
  appId: "1:1070493768081:web:627a95539805e9e7bf2230",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Load users and apply filter
async function loadUsers(role = "all") {
  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = "";

  try {
    const snapshot = await getDocs(collection(db, "users"));
    snapshot.forEach(docSnap => {
      const user = docSnap.data();
      const id = docSnap.id;

      // Filter by role if not "all"
      if (role === "all" || user.role === role) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td><button onclick="deleteUser('${id}')">Delete</button></td>
        `;
        tbody.appendChild(row);
      }
    });
  } catch (error) {
    console.error("Error loading users:", error);
  }
}

// Delete user
window.deleteUser = async function (userId) {
  if (confirm("Are you sure to delete this user?")) {
    try {
      await deleteDoc(doc(db, "users", userId));
      alert("User deleted!");
      loadUsers(document.getElementById("roleFilter").value);
    } catch (error) {
      console.error("Delete failed", error);
    }
  }
};

// Filter event listener
document.getElementById("roleFilter").addEventListener("change", (e) => {
  loadUsers(e.target.value);
});

// Initial load
loadUsers();
