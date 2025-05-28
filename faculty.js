import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(db, "faculty", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      document.getElementById("facultyName").innerText = data.name;
      document.getElementById("facultyEmail").innerText = data.email;
    } else {
      alert("Faculty data not found.");
    }
  } else {
    window.location.href = "login.html";
  }
});
