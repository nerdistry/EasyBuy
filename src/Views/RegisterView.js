import React from "react";
import { View, Text } from "react-native";
import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Input,
  Pressable,
  VStack,
} from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";

function RegisterView() {
  return (
    <Box flex={1} bg={Colors.white}>
      <Box alignItems="center" width="full" marginTop="15%">
        <Image
          // flex={1}
          source={require("../../assets/logo_bg.png")}
          alignItems="center"
          alt="Logo"
          size="100"
          resizeMode="center"
        />
      </Box>
      <Box
        w="full"
        flex={2}
        // marginTop="1"
        px="6"
        // justifyContent="center"
        alignItems="center"
      >
        <Heading>SIGN UP</Heading>
        <VStack space={5} pt="6">
          {/* USERNAME */}
          <Box w="100%">
            <Text style={{ fontWeight: "bold" }}>Username</Text>
            <Input
              type="text"
              padding={2}
              variant="outline"
              placeholder="My Name"
              w="100%"
              color={Colors.main}
              fontSize="15px"
              pl="2"
              bg="white"            
            />
          </Box>

          {/* EMAIL */}
          <Box w="100%">
            <Text style={{ fontWeight: "bold" }}>Email</Text>
            <Input
              textContentType="emailAddress"
              type="text"
              padding={2}
              variant="outline"
              placeholder="example@gmail.com"
              w="100%"
              color={Colors.main}
              fontSize="15px"
              pl="2"
            />
          </Box>

          {/* PASSWORD */}
          <Box w="100%">
            <Text style={{ fontWeight: "bold" }}>Password</Text>
            <Input
              padding={2}
              type="password"
              variant="outline"
              placeholder="*****"
              w="100%"
              color={Colors.main}
              pl="2"
              fontSize="15px"
            />
          </Box>
        </VStack>

        <Button
          _pressed={{
            bg: Colors.main,
          }}
          marginTop={30}
          marginBottom={2}
          w="80%"
          padding={3}
          rounded={20}
          bg={Colors.main}
          _text={{
            fontWeight: "bold",
            fontSize: "lg"
          }}
          // onPress={{

          // }}
        >
          SIGN UP
        </Button>

        <Text style={{ width: "100%", textAlign: "center" }}>or</Text>

        <VStack space={3} paddingTop="2">

        {/* GOOGLE */}
          <Button
            _pressed={{
              bg: "white",
            }}
            // w="70%"
            rounded={5}
            bg="white"
            type="outline"
            borderColor="gray.300"
            borderWidth="1"
            alignItems="center"
            justifyContent="center"
          >            
            <Text style={{ color: "black"}}>
            <AntDesign name="google" size={15} color="black" />&nbsp;
            Sign up with Google</Text>
          </Button>

        {/* FACEBOOK */}
          <Button
            _pressed={{
              bg: "white",
            }}
            // w="70%"
            rounded={5}
            bg="white"
            type="outline"
            borderColor="gray.300"
            borderWidth="1"
            alignItems="center"
            justifyContent="center"
          >            
            <Text style={{ color: "black"}}>
            <AntDesign name="facebook-square" size={15} color="black" />&nbsp;
            Sign up with Facebook</Text>
          </Button>
        </VStack>

        <Text style={{ marginTop: "10%" }}>
          Already Have an Account?&nbsp;
          <Text
            style={{
              fontWeight: "500",
              color: "#0047EA",
              textDecorationLine: "underline",
            }}
            onPress={() => {}}
          >
            Login
          </Text>
        </Text>
      </Box>
    </Box>
  );
}

export default RegisterView;
