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
import React from "react";
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
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color="white" fontSize={18} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>

      {/* Inputs */}
      <Box bg="white" h="full" px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>

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
            <CButton bg={Colors.main} color="white" mt={5}>
              CONTINUE
            </CButton>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingView;
