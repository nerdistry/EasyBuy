import React from "react";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import WishlistEmpty from "../Components/Wishlist/WishlistEmpty";
import Colors from "../color";
import CButton from "../Components/CButton";
import WishlistItems from "../Components/Wishlist/WishlistItems";
import { StatusBar } from "expo-status-bar";

function WishlistView() {
  return (
    <Box flex={1} safeAreaTop bg="gray.50">
        <StatusBar style="dark" />

      {/* Header */}
      <Center w="full" py={5}>
        <Text color="black" fontSize={25} bold>
          Wishlist
        </Text>
      </Center>

      {/* If Wishlist is Empty */}
      {/* <WishlistEmpty /> */}

      {/* Cart Items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <WishlistItems />

      </ScrollView>
    </Box>
  );
}

export default WishlistView;
