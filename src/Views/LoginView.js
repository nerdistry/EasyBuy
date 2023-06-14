import React, { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  KeyboardAvoidingView,
  Pressable,
  VStack,
} from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

function LoginView({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerShadowVisible: false,
      headerTitleStyle: { color: "white" },
      headerStyle: { backgroundColor: "white" },
      headerTitleAlign: "center",
      headerTintColor: "black",
      headerBackTitleStyle: { color: "black"}
    });
  }, [navigation]);

  const _login = () => {};
  return (
    <KeyboardAvoidingView flex={1} bg="white" behavior="padding">
    <StatusBar style="dark" />
      <Box alignItems="center" width="full">
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
              autoFocus
              type="email"
              fontSize="15px"
              pl="2"
              value={email}
              onChangeText={(text) => setEmail(text)}
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
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
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
          bg={Colors.main}
          _text={{
            fontWeight: "bold",
            fontSize: "lg",
          }}
          onPress={() => {
            _login;
            navigation.navigate("Bottom");
          }}
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

        <Pressable
          onPress={() => navigation.navigate("Register")}
          flexDirection="row"
          alignItems="center"
        >
          <Text>Don't Have an Account?&nbsp;</Text>
          <Text
            style={{
              fontWeight: "500",
              color: Colors.submain,
              textDecorationLine: "underline",
            }}
          >
            Sign Up
          </Text>
        </Pressable>
      </Box>
    </KeyboardAvoidingView>
  );
}

export default LoginView;
