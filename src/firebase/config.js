// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqnF3A2-6p72AKiiiN8kxg_Kqcy0Kzd1k",
  authDomain: "react-cursos-e2d05.firebaseapp.com",
  projectId: "react-cursos-e2d05",
  storageBucket: "react-cursos-e2d05.appspot.com",
  messagingSenderId: "972827282373",
  appId: "1:972827282373:web:a8063a480fd8878986d9ac"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
