import { StatusBar } from "expo-status-bar";
import { Box } from "native-base";
import React from "react";
import HomeHeader from "../Components/HomeHeader";
import HomeProducts from "../Components/HomeProducts";

function Homepage() {
  return (
    <Box flex={1} bg="gray.50">
    <StatusBar style="light" />
      <HomeHeader />
      <HomeProducts />
      
    </Box>
  );
}

export default Homepage;
