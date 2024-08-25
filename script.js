import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

  const firebaseConfig = {
  apiKey: "AIzaSyAV9YdOZKn_WMIusmPYHcKnCY4RQfBjC88",
  authDomain: "quickbite-45bc4.firebaseapp.com",
  projectId: "quickbite-45bc4",
  storageBucket: "quickbite-45bc4.appspot.com",
  messagingSenderId: "851454204708",
  appId: "1:851454204708:web:2e40d8af33ccf1ffaab1b1",
  measurementId: "G-08DLVV5T8G"
  };



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.getElementById('userName').innerText = user.displayName || "No Name Available";
        document.getElementById('userEmail').innerText = user.email;
    } else {
        alert('You are not logged in!');
        window.location.href = 'https://your-main-website.com/login.html';
    }
});

document.getElementById('logout').addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        window.location.href = 'https://login-page-kappa-three.vercel.app/';
    }).catch(error => {
        console.error('Error during logout:', error);
    });
});