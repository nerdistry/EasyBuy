import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React from "react";
import products from "../data/products";
import Categories from "./Categories";
import Rating from "./Rating";

function HomeProducts() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Categories />

      <Heading px={6} pt={4} size="md">
        Products
      </Heading>
      <Text px={6}>Explore and get Shopping!!</Text>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
        pt={2}
      >
        {products.map((product) => (
          <Pressable
            key={product._id}
            w="47%"
            bg="white"
            rounded="sm"
            shadow={1}
            pt={0}
            my={2}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={40}
              resizeMode="cover"
            />

            <Box px={4} pt={1}>
              <Heading size="sm" fontWeight="extrabold">
                ${product.price}
              </Heading>
              <Text fontSize={12} mt={1} isTruncated w="full">
                {product.name}
              </Text>

              <Box flexDirection="row">
                <Rating value={product.rating} />
                <Text flex={1} paddingLeft="5" isTruncated fontSize={11} bold>@{product.owner}</Text> 
              </Box>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
