import { Box, ScrollView, Text } from "native-base";
import React from "react";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://res.cloudinary.com/dcqeviqye/image/upload/v1667221720/cld-sample-5.jpg" title="Category 1" />
      <CategoryCard imgUrl="https://res.cloudinary.com/dcqeviqye/image/upload/v1667221720/cld-sample-5.jpg" title="Category 2" />
      <CategoryCard imgUrl="https://res.cloudinary.com/dcqeviqye/image/upload/v1667221720/cld-sample-5.jpg" title="Category 3" />
      <CategoryCard imgUrl="https://res.cloudinary.com/dcqeviqye/image/upload/v1667221720/cld-sample-5.jpg" title="Category 4" />
      <CategoryCard imgUrl="https://res.cloudinary.com/dcqeviqye/image/upload/v1667221720/cld-sample-5.jpg" title="Category 5" />
      <CategoryCard imgUrl="https://res.cloudinary.com/dcqeviqye/image/upload/v1667221720/cld-sample-5.jpg" title="Category 6" />
    </ScrollView>
  );
}

export default Categories;
