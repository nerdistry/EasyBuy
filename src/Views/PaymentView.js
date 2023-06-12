import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../color";
import CButton from "../Components/CButton";
import { Ionicons } from "@expo/vector-icons";

const PaymentInputs = [
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

function PaymentView() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color="white" fontSize={18} bold>
          PAYMENT DETAILS
        </Text>
      </Center>

      {/* Inputs */}
      <Box bg="white" h="full" px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            <HStack alignItems="center" bg="gray.50" px={3} py={1} rounded={10} justifyContent="space-between">
              <Box>
                <Image
                  source={require("../../assets/images/mpesa.png")}
                  alt="mpesa"
                  resizeMode="cover"
                  w={60}
                  h={50}
                />
              </Box>
              <Ionicons name="checkmark-circle" size={30} color={Colors.main} />
            </HStack>

            <FormControl>
                <FormControl.Label
                  _text={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  M-PESA NUMBER
                </FormControl.Label>
                <Input
                  bg="gray.200"
                  py={3}
                  fontSize={15}
                  color={Colors.main}
                  _focus={{
                    bg: "gray.200",
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                  placeholder="e.g. 0700xxxxxx"
                />
              </FormControl>
            <CButton bg={Colors.main} color="white" mt={5}>
              CONTINUE
            </CButton>
            <Text italic textAlign="center">
              Kindly input the <Text bold italic>M-pesa number</Text> you will use to pay
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentView;
