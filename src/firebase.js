import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAENlW7EnNqWjWn37NknuU7oaE7E0KKZdI",
    authDomain: "bt3103-week-6-cca15.firebaseapp.com",
    projectId: "bt3103-week-6-cca15",
    storageBucket: "bt3103-week-6-cca15.appspot.com",
    messagingSenderId: "1068353789401",
    appId: "1:1068353789401:web:6603288d409516ff7e0dc8",
    measurementId: "G-PHHRRTM1S2"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;