import firebase from "firebase";

const Config = {
    apiKey: "AIzaSyC1kVMsjpUilSC-othxyvFKOZwZov170LY",
    authDomain: "psychiz.firebaseapp.com",
    databaseURL: "https://psychiz-default-rtdb.firebaseio.com",
    projectId: "psychiz",
    storageBucket: "psychiz.appspot.com",
    messagingSenderId: "339029309611",
    appId: "1:339029309611:web:ff1053ea7964c59c8a5fee",
    measurementId: "G-HF9FWCZC2N"
};


firebase.initializeApp(Config);

export default firebase;