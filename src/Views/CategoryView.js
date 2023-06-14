import { Box } from "native-base";
import React from "react";
import Categories from "../Components/Categories";
import HomeHeader from "../Components/HomeHeader";

function CategoryView() {
  return (
    <Box>
      <HomeHeader />
      <Categories />
    </Box>
  );
}

export default CategoryView;
