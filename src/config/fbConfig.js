import firebase from 'firebase'  
import 'firebase/firestore'
import 'firebase/auth'
import dotenv from 'dotenv'
dotenv.config()

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "myproject-15c30.firebaseapp.com",
    databaseURL: "https://myproject-15c30.firebaseio.com",
    projectId: "myproject-15c30",
    storageBucket: "myproject-15c30.appspot.com",
    messagingSenderId: "518532191869",
    appId: "1:518532191869:web:e9c14653654a088b830314",
    measurementId: "G-MKFKPTMG6Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})


//firebase.analytics();

export default firebase;