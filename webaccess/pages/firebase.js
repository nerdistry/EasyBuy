// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFHvgLt_zSUkQQHesTS_gT6e3g_c--R20",
  authDomain: "easybuy-d639a.firebaseapp.com",
  databaseURL: "https://easybuy-d639a-default-rtdb.firebaseio.com",
  projectId: "easybuy-d639a",
  storageBucket: "easybuy-d639a.appspot.com",
  messagingSenderId: "4234040569",
  appId: "1:4234040569:web:f910d919a4ec95d080be28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

