import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your config here (replace with your actual values)
const firebaseConfig = {
  apiKey: "AIzaSyABC...",
  authDomain: "yashgiet.firebaseapp.com",
  projectId: "yashgiet",
  storageBucket: "yashgiet.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd123"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
