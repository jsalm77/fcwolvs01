// إعداد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyDzBbcMUHBs_pc1mbfwobGW7KJgyDKmQIE",
  authDomain: "mj36-7e65e.firebaseapp.com",
  databaseURL: "https://mj36-7e65e-default-rtdb.firebaseio.com",
  projectId: "mj36-7e65e",
  storageBucket: "mj36-7e65e.firebasestorage.app",
  messagingSenderId: "64103654826",
  appId: "1:64103654826:web:c7dcd0e9af6466e67137d3"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// التصدير
export { db, ref, set, get, onValue };
