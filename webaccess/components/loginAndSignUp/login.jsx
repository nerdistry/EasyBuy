import React, { useState } from "react";
import Image from "next/image";
import { userAuth } from "../../context/AuthContext";

//INTERNALIMPORT
import Style from "./loginAndSignUp.module.css";
import images from "../../images";
import Button from "../button/button";

const loginAndSignUp = () => {


 const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // You can access the signed in user with result.user
    console.log(result.user);
  } catch (error) {
    // Handle Errors here.
    console.error(error);
  }
};


  const [activeBtn, setActiveBtn] = useState(1);

  const socialImage = [
    {
      social: images.google,
      name: "Continue with Google",
      handler: googleSignIn, // handleGoogleSignIn function will be called on click
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
  
  // ...
  
  {socialImage.map((el, i) => (
    <div
      key={i + 1}
      onClick={() => {
        setActiveBtn(i + 1);
        el.handler && el.handler();  // Call the handler if it's defined
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
              onClick={() => setActiveBtn(i + 1)}
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

export default loginAndSignUp;
