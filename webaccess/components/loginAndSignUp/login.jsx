import React, { useState } from "react";
import Image from "next/image";
import { userAuth } from "../../context/AuthContext";

//INTERNALIMPORT
import Style from "./loginAndSignUp.module.css";
import images from "../../images";
import Button from "../button/button";

const LoginAndSignUp = () => {
  const {googleSignIn} = userAuth();

  const handlegoogleSignIn = async () => {
    // const provider = new GoogleAuthProvider();
    try {
      await googleSignIn();
    } catch (error) {
      // Handle Errors here.
      console.log(error);
    }
  };

  const [activeBtn, setActiveBtn] = useState(1);

  const socialImage = [
    {
      social: images.google,
      name: "Continue with Google",
      onClick: handlegoogleSignIn, // handleGoogleSignIn function will be called on click
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
      // Assuming you have a function for Facebook sign-in
    },
    {
      social: images.twitter,
      name: "Continue with Twitter",
      // Assuming you have a function for Twitter sign-in
    },
  ];

  return (
    <div className={Style.user}>
      <div className={Style.user_box}>
        <div className={Style.user_box_input}>
          <div className={Style.user_box_input_box}>
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="example@example.com" />
          </div>
          <div className={Style.user_box_input_box}>
            <label htmlFor="password" className={Style.user_box_input_box_label}>
              <p>Password</p>
              <p>
                <a href="#">Forgot password?</a>
              </p>
            </label>
            <input type="password" />
          </div>
        </div>

        <Button btnName="Continue" classStyle={Style.button} />

        <p className={Style.user_box_or}>OR</p>
        
        <div className={Style.user_box_social}>
          {socialImage.map((el, i) => (
            <div
              key={i + 1}
              onClick={() => {
                setActiveBtn(i + 1);
                el.onClick && el.onClick(); // Call the function here
              }}
              className={`${Style.user_box_social_item} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
            >
              <Image
                src={el.social}
                alt={el.name}
                width={30}
                height={30}
                className={Style.user_box_social_item_img}
              />
              <p>
                <span>{el.name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignUp;
