import { Box, Button, Center, Text, Image, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import CButton from "../Components/CButton";

function NotVerifiedView() {
  return (
    <Box flex={1} safeAreaTop>
      <Center w="full" h={300}>
        <Image
          source={require("../../assets/logo_bg.png")}
          alt="logo"
          size="2xl"
        />
      </Center>

      <Text style={{ fontWeight: "bold", textAlign: "center" }} marginY={5}>
        To continue, kindly Register or Login
      </Text>

      <VStack space={6} px={5} alignItems="center">
        <CButton bg="#141414" color="white">
          REGISTER
        </CButton>

        <CButton
          bg="white"
          color="#003c32"
          type="outline"
          borderColor="#003c32"
          borderWidth="3"
        >
          LOGIN
        </CButton>
      </VStack>
    </Box>
  );
}

export default NotVerifiedView;
