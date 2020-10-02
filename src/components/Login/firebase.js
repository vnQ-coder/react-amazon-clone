import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWtc7ON1A3IE4OujgDBMiOB5JdlRbupNg",
    authDomain: "clone-82856.firebaseapp.com",
    databaseURL: "https://clone-82856.firebaseio.com",
    projectId: "clone-82856",
    storageBucket: "clone-82856.appspot.com",
    messagingSenderId: "239754757068",
    appId: "1:239754757068:web:b7b313ea113b9fae999369",
    measurementId: "G-1K844V9DMM"
  });

const auth = firebase.auth();

export {auth};