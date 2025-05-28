import { db } from './firebase.js';
import {
  collection,
  getDocs,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";



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
    window.location.href = "index.html";
  }
});

async function loadStudents() {
  const select = document.getElementById("studentSelect");
  const querySnapshot = await getDocs(collection(db, "students"));

  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const option = document.createElement("option");
    option.value = docSnap.id; // student UID
    option.text = data.name + " (" + data.email + ")";
    select.appendChild(option);
  });
}

// Call function when page loads
loadStudents();

window.submitMarks = async function () {
  const studentId = document.getElementById("studentSelect").value;
  const subject = document.getElementById("subject").value;
  const marks = parseInt(document.getElementById("marks").value);

  if (!studentId || !subject || isNaN(marks)) {
    alert("Please fill all fields correctly.");
    return;
  }

  try {
    await addDoc(collection(db, "students", studentId, "marks"), {
      subject,
      marks,
      timestamp: Date.now()
    });
    alert("Marks added successfully!");
  } catch (error) {
    alert("Error adding marks: " + error.message);
  }
};

