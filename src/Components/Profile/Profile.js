import React from "react";
import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import Colors from "../../color";
import CButton from "../CButton";

const Inputs = [
  {
    label: "USERNAME",
    type: "text",
  },
  {
    label: "EMAIL",
    type: "text",
  },
  {
    label: "PASSWORD",
    type: "password",
  },
  {
    label: "DATE OF BIRTH",
    type: "text",
  },
  {
    label: "PHONE NUMBER",
    type: "text",
  },
];

const Profile = () => {
  return (
    <Box h="full" bg="white" px={10}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>

          {Inputs.map((i, index) => (
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
                color={Colors.main}
                fontSize={20}
                type={i.type}
                _focus={{
                  bg: "gray.200",
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <CButton bg={Colors.main} color="white">
            UPDATE PROFILE
          </CButton>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
