import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBbmXfTABam2VNQhGf4ljISf7ZDSXN65c0",
    authDomain: "linkedin-clone-52e91.firebaseapp.com",
    projectId: "linkedin-clone-52e91",
    storageBucket: "linkedin-clone-52e91.appspot.com",
    messagingSenderId: "38430561487",
    appId: "1:38430561487:web:fb685c2e02e55ea3a1d3ba"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();

  export {db ,auth};