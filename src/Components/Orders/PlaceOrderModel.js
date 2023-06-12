import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
import Colors from "../../color";
import CButton from "../CButton";

const TotalOrder = [
  {
    title: "Products",
    price: 4000.0,
    color: "gray.600",
  },
  {
    title: "Delivery Fee",
    price: 34.68,
    color: "gray.600",
  },
  {
    title: "Total",
    price: 4034.68,
    color: "black",
  },
];

const PlaceOrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <CButton
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color="white"
        mt={5}
      >
        SHOW TOTAL
      </CButton>

      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxW="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {TotalOrder.map((i, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium" fontSize={15}>
                    {i.title}
                  </Text>
                  <Text
                    color={i.color === "black" ? "black" : "gray.600"}
                    bold
                    fontSize={14}
                  >
                    ${i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Box pl={2} mr={5}>
              <Image
                source={require("../../../assets/images/mpesa.png")}
                alt="mpesa"
                resizeMode="cover"
                w={60}
                h={50}
              />
            </Box>
            <Button
              flex={1}
              w="48%"
              bg={Colors.main}
              h={45}
              _text={{ color: "white", fontWeight: "bold" }}
              onPress={() => setShowModel(false)}
              _pressed={{
                bg: Colors.main,
              }}
            >
              PLACE ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
