
// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyJtRHMYx_bBSIm84mxHF-QLuvti3JffQ",
    authDomain: "airaohubturismo.firebaseapp.com",
    projectId: "airaohubturismo",
    storageBucket: "airaohubturismo.appspot.com",
    messagingSenderId: "850181910469",
    appId: "1:850181910469:web:203c43c9bf4e493e32a5ac"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };



