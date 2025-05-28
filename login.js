import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    // Try student collection
    let userDoc = await getDoc(doc(db, "students", uid));

    if (!userDoc.exists()) {
      // Try faculty if not found in students
      userDoc = await getDoc(doc(db, "faculty", uid));
    }

    if (userDoc.exists()) {
      const role = userDoc.data().role;

      if (role === "student") {
        window.location.href = "student.html";
      } else if (role === "faculty") {
        window.location.href = "faculty.html";
      } else {
        alert("Unknown role.");
      }
    } else {
      alert("User role not found in Firestore.");
    }
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
