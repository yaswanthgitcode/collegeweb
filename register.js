import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    const userData = { name, email, role };

    // Save to Firestore
    await setDoc(doc(db, role === "student" ? "students" : "faculty", uid), userData);

    alert("Registration successful! Please login.");
    window.location.href = "login.html"; // Create this later
  } catch (error) {
    alert("Error: " + error.message);
  }
});
