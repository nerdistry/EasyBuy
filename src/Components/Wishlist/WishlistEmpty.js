import React from "react";
import { Box, Center, Text } from "native-base";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Colors from "../../color";
import CButton from "../CButton";

const WishlistEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.submain} rounded="full">
          <Entypo name="shopping-cart" size={70} color="white" />
        </Center>
        <Text mt={5} color={Colors.submain} fontSize={15} bold textAlign="center">
          CART IS EMPTY, KEEP SHOPPING TO ADD ITEMS!
        </Text>
      </Center>
      
      <CButton color="white" bg={Colors.main}>
        CONTINUE SHOPPING
      </CButton>
    </Box>
  );
};

export default WishlistEmpty;
