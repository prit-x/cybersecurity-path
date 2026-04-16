<!-- Firebase SDK -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBPZ8kmZVMRNROKf5lW2t1NB4B6AOBoK8Y",
    authDomain: "cybersecurity-path-404e6.firebaseapp.com",
    projectId: "cybersecurity-path-404e6",
    storageBucket: "cybersecurity-path-404e6.firebasestorage.app",
    messagingSenderId: "180520751617",
    appId: "1:180520751617:web:e732456808123817dfe600"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  window.auth = auth;
  window.db = db;
</script>
