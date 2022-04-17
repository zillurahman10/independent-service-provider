import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyByUvu5__bOVDS_7ZffVFFRAXyOqWwIBAQ",
    authDomain: "doc-fine.firebaseapp.com",
    projectId: "doc-fine",
    storageBucket: "doc-fine.appspot.com",
    messagingSenderId: "152368012636",
    appId: "1:152368012636:web:987ec2f303f61e2dd13599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;