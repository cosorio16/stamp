// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArt7SgXi1TYCl-coHPz99jEJ1SVNLahBc",
    authDomain: "stamp-da91c.firebaseapp.com",
    projectId: "stamp-da91c",
    storageBucket: "stamp-da91c.firebasestorage.app",
    messagingSenderId: "873459446815",
    appId: "1:873459446815:web:079347ce587c619502d12a",
    measurementId: "G-JGEN9YBGY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);