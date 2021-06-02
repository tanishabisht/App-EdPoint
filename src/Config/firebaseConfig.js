import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCWLCn1SiGWiCyiaRVnRkFitzpTtENYFdA",
    authDomain: "edpoint-1e713.firebaseapp.com",
    databaseURL: "https://edpoint-1e713-default-rtdb.firebaseio.com",
    projectId: "edpoint-1e713",
    storageBucket: "edpoint-1e713.appspot.com",
    messagingSenderId: "259593986915",
    appId: "1:259593986915:web:c14ef5cde3f121e7bfe956"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.database()
export const storage = firebase.storage()
  