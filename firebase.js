import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCFHvgLt_zSUkQQHesTS_gT6e3g_c--R20",
    authDomain: "easybuy-d639a.firebaseapp.com",
    projectId: "easybuy-d639a",
    storageBucket: "easybuy-d639a.appspot.com",
    messagingSenderId: "4234040569",
    appId: "1:4234040569:web:f910d919a4ec95d080be28"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth };