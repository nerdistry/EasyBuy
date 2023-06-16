import React from "react";
// import {GoogleButton} from "react-google-button";


//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import LoginAndSignUp from "../components/loginAndSignUp/login"
import { AuthContextProvider } from "../context/AuthContext";


const login = () => {
  return (
    // <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>Login</h1>
        {/* <GoogleButton className={Style.google_button} /> */}
        <AuthContextProvider>
        <LoginAndSignUp />

      </AuthContextProvider>
        <p className={Style.login_box_para}>
          New user? <a href="signUp">Create an account</a>
        </p>
      </div>
    // </div>
  );
};

export default login;