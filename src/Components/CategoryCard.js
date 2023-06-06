import { Box, Image, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

function CategoryCard({ imgUrl, title }) {
  return (
    <TouchableOpacity
      position="relative"
      style={{
        marginRight: 8,
      }}
    >
      <Image
        source={{ uri: imgUrl }}
        alt="Category"
        w={20}
        h={20}
        borderRadius="md"
      />
      <Text position="absolute" bottom="1" left="1" color="white" style={{
        fontWeight: "bold"
      }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CategoryCard;
