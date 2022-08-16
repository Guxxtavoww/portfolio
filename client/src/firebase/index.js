import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "portfolio-ccd8c",
    storageBucket: "portfolio-ccd8c.appspot.com",
    messagingSenderId: "935061388995",
    appId: "1:935061388995:web:0d87c7e2b5dc8b1c75ec76",
    measurementId: "G-9NS1YC5MNP"
};

const app = initializeApp(firebaseConfig);

export default app;