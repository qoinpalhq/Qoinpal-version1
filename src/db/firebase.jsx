// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC2xaQY-sXSLnQfTUTefqTGvaC8fsdWbM",
  authDomain: "qoinpal-50fc0.firebaseapp.com",
  projectId: "qoinpal-50fc0",
  storageBucket: "qoinpal-50fc0.appspot.com",
  messagingSenderId: "397504421652",
  appId: "1:397504421652:web:70dcf40e81acbc5610ac01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);