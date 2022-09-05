import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDYFNFkUTogdhUrloMMTSP7yL5FuEZjzdM",
    authDomain: "ejemplo-react-f059a.firebaseapp.com",
    projectId: "ejemplo-react-f059a",
    storageBucket: "ejemplo-react-f059a.appspot.com",
    messagingSenderId: "486241882333",
    appId: "1:486241882333:web:4040c8334f492e6e3a0b34"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export { auth, firebase }

