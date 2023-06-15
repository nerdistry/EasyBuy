import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./heroSection.module.css";
import { Button } from "../componentIndex";
import images from "../../images";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, buy and sell products 🖼️</h1>
          <p>
            Discover the most outstanding products from different people. List
            your products and sell them!
          </p>
          <Button btnName="Start your search" onClick/>
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
