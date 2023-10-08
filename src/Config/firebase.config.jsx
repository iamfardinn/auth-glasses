// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiVIRJ-bEKjx2jPnZp3IXZF-LRWGIp1TA",
  authDomain: "react-firebase-auth-72bb6.firebaseapp.com",
  projectId: "react-firebase-auth-72bb6",
  storageBucket: "react-firebase-auth-72bb6.appspot.com",
  messagingSenderId: "373299587795",
  appId: "1:373299587795:web:9d7596f5e884d6d16a0226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;