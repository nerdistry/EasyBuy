import { useNavigation } from "@react-navigation/native";
import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../../color";

const Orders = () => {
  const navigation = useNavigation();
  return (
    <Box h="full" bg="white" py={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PAID */}
        <Pressable onPress={() => {
            navigation.navigate("OrderDetails");
          }}>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg="gray.100"
            py={5}
            px={2}
            borderRadius={5}
            borderBottomWidth={2}
            borderBottomColor="white"
          >
            <Text fontSize={12} color="blue.400" isTruncated>
              794729047030
            </Text>
            <Text fontSize={14} color="black" isTruncated fontWeight="900">
              PAID
            </Text>
            <Text fontSize={12} italic color="black" isTruncated>
              May 23 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={10}
              bg="green.600"
              _text={{
                color: "white",
              }}
              _pressed={{
                bg: "green.600",
              }}
            >
              $3000
            </Button>
          </HStack>
        </Pressable>

        {/* NOT PAID */}
        <Pressable
          onPress={() => {
            navigation.navigate("OrderDetails");
          }}
        >
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg="gray.100"
            py={5}
            px={2}
            borderRadius={5}
          >
            <Text fontSize={12} color="blue.400" isTruncated>
              794729047029
            </Text>
            <Text fontSize={14} color="black" isTruncated fontWeight="900">
              NOT PAID
            </Text>
            <Text fontSize={12} italic color="black" isTruncated>
              May 10 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={10}
              bg="red.600"
              _text={{
                color: "white",
              }}
              _pressed={{
                bg: "red.600",
              }}
            >
              $25
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
