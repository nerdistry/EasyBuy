import React from "react";
import { View, Text } from "react-native";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  VStack,
} from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

function LoginVIew() {
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
        <Heading>Welcome Back</Heading>
        
        <VStack space={5} pt="6">
          {/* EMAIL */}
          <Box w="100%">
            <Text style={{ fontWeight: "bold" }}>Email</Text>
            <Input
              padding={2}
              variant="outline"
              placeholder="example@gmail.com"
              w="100%"
              color={Colors.main}
              fontSize="15px"
              pl="2"
            />
          </Box>

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
          w="80%"
          padding={3}
          rounded={20}
          bg="#141414"
          _text={{
            fontWeight: "bold",
            fontSize: "lg",
          }}
          // onPress={{

          // }}
        >
          LOGIN
        </Button>

        <Pressable
          marginTop={2}
          marginBottom={5}
          alignItems="flex-end"
          width="100%"
        >
          <Text style={{ textDecorationLine: "underline" }}>
            Forgot Password?
          </Text>
        </Pressable>

        <Text>
          Don't Have an Account?&nbsp;
          <Text
            style={{
              fontWeight: "500",
              color: "#0047EA",
              textDecorationLine: "underline",
            }}
            onPress={() => {}}
          >
            Sign Up
          </Text>
        </Text>
      </Box>
    </Box>
  );
}

export default LoginVIew;
