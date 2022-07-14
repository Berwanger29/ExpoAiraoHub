
// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwMymltjFe82jQc4XvujFe-5ANT3IqbWY",
    authDomain: "testeairaohub.firebaseapp.com",
    projectId: "testeairaohub",
    storageBucket: "testeairaohub.appspot.com",
    messagingSenderId: "260943659942",
    appId: "1:260943659942:web:330bfbb71c333e97afc567",
    measurementId: "G-DKKNPXP5EE"
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



