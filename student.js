import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const docRef = doc(db, "students", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            document.getElementById("studentName").innerText = data.name;
            document.getElementById("studentEmail").innerText = data.email;
        } else {
            alert("Student data not found.");
        }
    } else {
        window.location.href = "login.html";
    }
});

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        const marksRef = collection(db, "students", uid, "marks");
        const querySnapshot = await getDocs(marksRef);

        const tableBody = document.querySelector("#marksTable tbody");
        tableBody.innerHTML = ""; // clear old data

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${data.subject}</td>
        <td>${data.marks}</td>
      `;
            tableBody.appendChild(row);
        });
    } else {
        window.location.href = "login.html"; // Not logged in
    }
});

