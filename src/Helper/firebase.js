import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpUwvxDseNXuTfk01rYgEqsvBlZty6_fM",
  authDomain: "quiz-80774.firebaseapp.com",
  projectId: "quiz-80774",
  storageBucket: "quiz-80774.appspot.com",
  messagingSenderId: "559996492675",
  appId: "1:559996492675:web:0811074c53033872ff74b6",
  measurementId: "G-MFVGZ9NHQM",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const firestore = firebase.firestore();
