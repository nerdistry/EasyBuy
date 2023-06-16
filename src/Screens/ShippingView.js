import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useLayoutEffect } from "react";
import Colors from "../color";
import CButton from "../Components/CButton";

const ShippingInputs = [
  {
    label: "CITY",
    type: "text",
  },
  {
    label: "POSTAL CODE",
    type: "text",
  },
  {
    label: "ZIP CODE",
    type: "text",
  },
  {
    label: "ADDRESS",
    type: "text",
  },
];

function ShippingView() {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Delivery Address",
      headerShadowVisible: true,
      headerTitleStyle: { color: "black" },
      headerStyle: { backgroundColor: "white" },
      headerTitleAlign: "center", 
      headerTintColor: "black",
    });
  }, [navigation]);

  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bgColor="gray.50">
        <StatusBar style="dark" />

      {/* Inputs */}
      <Box px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6}>

            {ShippingInputs.map((i,index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  bg="gray.200"
                  py={3}
                  fontSize={15}
                  color={Colors.main}
                  type={i.type}
                  _focus={{
                    bg: "gray.200",
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <CButton bg={Colors.main} color="white" mt={5} onPress={() => navigation.navigate("Payment")}>
              CONTINUE
            </CButton>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingView;
