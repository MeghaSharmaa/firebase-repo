import firebase from "firebase";

const Config = {
    apiKey: "AIzaSyAgiNQs95eL_9BJxTWqmVIhFEZtl1QxT0E",
    authDomain: "know-it-all-9887d.firebaseapp.com",
    databaseURL: "https://know-it-all-9887d-default-rtdb.firebaseio.com",
    projectId: "know-it-all-9887d",
    storageBucket: "know-it-all-9887d.appspot.com",
    messagingSenderId: "394630709378",
    appId: "1:394630709378:web:4a06052c8381829faa749b",
    measurementId: "G-H5KZ970ETM"
};


firebase.initializeApp(Config);

export default firebase;