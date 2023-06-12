import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../../color";
import products from "../../data/products";

const OrderItems = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products.slice(0, 5)}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              bg="white"
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg="gray.100">
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMode="cover"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated color="black" bold fontSize={14}>
                  {item.name}
                </Text>
                <Text color="gray.400" bold fontSize={14} mt={1.5}>
                  ${item.price}
                </Text>
              </VStack>
              <Center>
                <Button
                  bg={Colors.main}
                  _pressed={{ bg: Colors.main }}
                  _text={{ Color: "white" }}
                >
                  5
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
};

export default OrderItems;
