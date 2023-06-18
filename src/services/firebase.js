import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const REACT_APP_API_KEY = "AIzaSyBA89R0dt_W_RnL-0T4SzN_sN_FvTifPDI"
const REACT_APP_AUTH_DOMAIN = "milan-sign-in-test.firebaseapp.com"
const REACT_APP_PROJECT_ID = "milan-sign-in-test"
const REACT_APP_STORAGE_BUCKET = "milan-sign-in-test.appspot.com"
const REACT_APP_MESSAGING_SENDER_ID = "166299635696"
const REACT_APP_APP_ID = "1:166299635696:web:6f5182200c0c8da0839735"
const REACT_APP_MEASUREMENT_ID = "G-25FJQ9EFZY"

firebase.initializeApp({
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
    }).catch((error) => {
        console.log(error.message)
    })
}

export const logOut = (props) => {
    auth.signOut().then(() => {
    }).catch((error) => {
        console.log(error.message)
    })
}