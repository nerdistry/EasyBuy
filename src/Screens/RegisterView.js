import React, { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Input,
  KeyboardAvoidingView,
  Pressable,
  VStack,
} from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";

function RegisterView({ navigation }) {
  const [username, setUsername] = useState("");
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
    });
  }, [navigation]);

  const _register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        updateProfile(userCredential.user, {
          displayName: username,
          photoURL:
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
        });
        sendEmailVerification(userCredential.user);
        navigation.navigate("Auth");
        setUsername("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      flex={1}
      bg="white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="dark" />
      <Box alignItems="center" width="full">
        <Image
          // flex={1}
          source={require("../../assets/logo_bg.png")}
          alignItems="center"
          alt="Logo"
          size="100"
          resizeMode="center"
          mt={-5}
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
              placeholder="John Doe"
              w="100%"
              color={Colors.main}
              fontSize="15px"
              pl="2"
              bg="white"
              value={username}
              onChangeText={(text) => setUsername(text)}
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
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Box>

          {/* PASSWORD */}
          <Box w="100%">
            <Text style={{ fontWeight: "bold" }}>Create Password</Text>
            <Input
              padding={2}
              type="password"
              variant="outline"
              placeholder="*****"
              w="100%"
              color={Colors.main}
              pl="2"
              fontSize="15px"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              onSubmitEditing={_register}
            />
          </Box>
        </VStack>

        <Button
          _pressed={{
            bg: Colors.submain,
          }}
          marginTop={30}
          marginBottom={2}
          w="80%"
          padding={3}
          rounded={20}
          bg={Colors.main}
          _text={{
            fontWeight: "bold",
            fontSize: "lg",
          }}
          onPress={_register}
        >
          CREATE ACCOUNT
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
            <Text style={{ color: "black" }}>
              <AntDesign name="google" size={15} color="black" />
              &nbsp; Sign up with Google
            </Text>
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
            <Text style={{ color: "black" }}>
              <AntDesign name="facebook-square" size={15} color="black" />
              &nbsp; Sign up with Facebook
            </Text>
          </Button>

          {/* APPLE */}
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
            <Text style={{ color: "black" }}>
              <AntDesign name="facebook-square" size={15} color="black" />
              &nbsp; Sign up with Apple
            </Text>
          </Button>
        </VStack>

        <Pressable
          style={{ marginTop: "10%" }}
          onPress={() => navigation.navigate("Login")}
          flexDirection="row"
          alignItems="center"
        >
          <Text>Already Have an Account?&nbsp;</Text>
          <Text
            style={{
              fontWeight: "500",
              color: Colors.submain,
              textDecorationLine: "underline",
            }}
          >
            Login
          </Text>
        </Pressable>
        <Box h={100}></Box>
      </Box>
    </KeyboardAvoidingView>
  );
}

export default RegisterView;
