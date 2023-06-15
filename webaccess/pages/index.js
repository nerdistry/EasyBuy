import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {HeroSection} from "../components/componentIndex";
import { AuthContextProvider } from "../context/AuthContext";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <AuthContextProvider>
      <HeroSection />
      </AuthContextProvider>
      
    </div>
  );
};

export default Home;
