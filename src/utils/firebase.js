// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnFpCXDo1vpoqD0h58t6djcOWGMdGcGjM",
  authDomain: "netflix-gpt-d11c5.firebaseapp.com",
  projectId: "netflix-gpt-d11c5",
  storageBucket: "netflix-gpt-d11c5.firebasestorage.app",
  messagingSenderId: "92221033416",
  appId: "1:92221033416:web:1fee00141be0ccb819cefd",
  measurementId: "G-6FD3BJ95B8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
