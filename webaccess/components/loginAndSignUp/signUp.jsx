import React, { useState } from "react";
import Image from "next/image";

//INTERNALIMPORT
import Style from "./loginAndSignUp.module.css";
import images from "../../images";
import Button from "../button/button";

const loginAndSignUp = () => {

  const [activeBtn, setActiveBtn] = useState(1);

  const socialImage = [
    {
      social: images.google,
      name: "Continue with Google",
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
    {
      social: images.twitter,
      name: "Continue with Twitter",
    },
  ];
  
  return (
    <div className={Style.user}>
      <div className={Style.user_box}>
        <div className={Style.user_box_input}>
          <div className={Style.user_box_input_box}>
            <label htmlFor="email" className={Style.user_box_input_box_label}>
            <p>Email address</p>
            </label>
            <input type="email" placeholder="example@example.com" />
          </div>
          <div className={Style.user_box_input_box}>
            <label htmlFor="number" className={Style.user_box_input_box_label}>
            <p>Phone Number</p>
            </label>
            <input type="number" />
          </div>
          <div className={Style.user_box_input_box}>
            <label htmlFor="password" className={Style.user_box_input_box_label}>
              <p>Password</p>
            </label>
            <input type="password" />
          </div>
          <div className={Style.user_box_input_box}>
            <label htmlFor="password" className={Style.user_box_input_box_label}>
              <p>Retype Password</p>
            </label>
            <input type="password" />
          </div>
          <div className={Style.user_box_input_box}>
            <label htmlFor="password" className={Style.user_box_input_box_label}>
              <p>Ethereum Wallet Address</p>
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
