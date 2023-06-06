import React from "react";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import Colors from "../color";
import CButton from "../Components/CButton";

function CartView() {
  return (
    <Box flex={1} safeAreaTop bg="gray.50">
      {/* Header */}
      <Center w="full" py={5}>
        <Text color="black" fontSize={25} bold>
          Cart
        </Text>
      </Center>

      {/* If Cart is Empty */}
      {/* <CartEmpty /> */}

      {/* Cart Items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />

        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={10}
            justifyContent="space-between"
            bg="white"
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text bold>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={10}
              bg={Colors.main}
              _text={{
                color: "white",
                fontWeight: "bold",
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $7000
            </Button>
          </HStack>
        </Center>

        {/* Checkout */}
        <Center px={5}>
          <CButton bg={Colors.main} color="white" mt={10}>
            CHECKOUT
          </CButton>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartView;
