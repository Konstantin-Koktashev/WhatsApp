import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGnov__sedgsZtD6N0U__jDpTrnHxEdGQ",
  authDomain: "whatsapp-clone-184a6.firebaseapp.com",
  projectId: "whatsapp-clone-184a6",
  storageBucket: "whatsapp-clone-184a6.appspot.com",
  messagingSenderId: "228652397662",
  appId: "1:228652397662:web:54daf778673bdf73b1b0cf",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
