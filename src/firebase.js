import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDqU0DkiKQ6c3RkO2CXoNvJNG84RH3l-tk",
  authDomain: "redux-pokemon.firebaseapp.com",
  projectId: "redux-pokemon",
  storageBucket: "redux-pokemon.appspot.com",
  messagingSenderId: "393278391490",
  appId: "1:393278391490:web:11e5822c7aa19f075e675b"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export { auth, firebase }

