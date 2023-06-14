import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import CButton from "./CButton";

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

const ViewOrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();
  return (
    <Center>
      <CButton
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color="white"
        mt={5}
      >
        CONFIRM DELIVERY
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

          {/* CONFIRM */}
            <Button
             
              w="48%"
              bg={Colors.main}
              h={45}
              _text={{ color: "white", fontWeight: "bold" }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              CONFIRM
            </Button>
<Spacer />
            {/* CANCEL */}
            <Button
              
              w="48%"
              bg="red.600"
              h={45}
              _text={{ color: "white", fontWeight: "bold" }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              CANCEL
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ViewOrderModel;
