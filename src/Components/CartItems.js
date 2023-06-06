import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../color";
import products from "../data/products";

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 4)}
    renderItem={renderitem}
    renderHiddenItem={hiddenItem}
    showsVerticalScrollIndicator={false}
  />
);

// Cart Item
const renderitem = (data) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg="white"
        shadow={1}
        rounded={5}
        overflow="hidden"
      >
        <Center w="25%" bg="gray.200">
          <Image
            source={{ uri: data.item.image }}
            alt={data.item.name}
            w="full"
            h={24}
            resizeMode="cover"
          />
        </Center>
        <VStack w="60%" px={2}>
          <Text isTruncated color="black" bold fontSize={12}>
            {data.item.name}
          </Text>
          <Text color="gray.400">${data.item.price}</Text>
        </VStack>

        <Center>
          <Button
            bg={Colors.main}
            _pressed={{ bg: Colors.main }}
            _text={{ color: "white" }}
          >
            5
          </Button>
        </Center>
      </HStack>
    </Box>
  </Pressable>
);

// Hidden
const hiddenItem = () => (
  <Pressable
    w={50}
    roundedTopRight={5}
    roundedBottomRight={5}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg="red.700"
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color="white" />
    </Center>
  </Pressable>
);

const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItems;
