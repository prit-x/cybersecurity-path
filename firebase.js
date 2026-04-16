<!DOCTYPE html>
<html>
<head>
    <title>Sign Up - Cybersecurity Path</title>
    <style>
        body { background: #0a0a0a; color: #00ff41; font-family: 'Courier New', monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .box { border: 1px solid #00ff41; padding: 30px; background: rgba(0, 20, 0, 0.8); box-shadow: 0 0 15px #00ff41; }
        input { background: #000; border: 1px solid #00ff41; color: #00ff41; padding: 10px; margin: 10px 0; width: 250px; }
        button { background: #00ff41; color: #000; border: none; padding: 10px; width: 100%; cursor: pointer; font-weight: bold; }
    </style>
</head>
<body>

    <div class="box">
        <h2>CREATE_IDENTITY</h2>
        <input type="email" id="email" placeholder="Email Address">
        <input type="password" id="password" placeholder="Password">
        <button id="signupBtn">INITIALIZE_SIGNUP</button>
        <p><a href="login.html" style="color: #00ff41;">Already have an account? Login</a></p>
    </div>

    <script src="firebase.js" type="module"></script>

    <script type="module">
        import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

        document.getElementById('signupBtn').addEventListener('click', () => {
            const auth = window.auth; // This comes from firebase.js
            
            if (!auth) {
                alert("Hacking in progress... (Firebase is still loading, wait 2 seconds)");
                return;
            }

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Identity Verified! Welcome to the path.");
                    window.location.href = "dashboard.html";
                })
                .catch((error) => {
                    alert("Access Denied: " + error.message);
                });
        });
    </script>
</body>
</html>