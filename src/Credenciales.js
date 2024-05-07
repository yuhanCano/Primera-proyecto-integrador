// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChqSXztv5TDjfA0IQwj7-GjPG-r1mxo7c",
  authDomain: "guardar-usuario-react.firebaseapp.com",
  projectId: "guardar-usuario-react",
  storageBucket: "guardar-usuario-react.appspot.com",
  messagingSenderId: "265907817117",
  appId: "1:265907817117:web:199e7764dbb8baa8f0a274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;