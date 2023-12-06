import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0u64N9C4CAA0M-GPtiWdgQFbhV3RtVfw",
  authDomain: "reactapp-28f8e.firebaseapp.com",
  projectId: "reactapp-28f8e",
  storageBucket: "reactapp-28f8e.appspot.com",
  messagingSenderId: "1011894244843",
  appId: "1:1011894244843:web:168d2e28469bebc04235ae",
  measurementId: "G-N1KCKPECSX"
};
  

  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();