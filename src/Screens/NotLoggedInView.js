import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import { Box, Button, Center, Text, Image, VStack } from "native-base";
import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { auth } from "../../firebase";
import Colors from "../color";
import CButton from "../Components/CButton";


function NotLoggedInView({ navigation }) {

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log(authUser);
      if (authUser != null) {
        if (authUser.emailVerified) {
          navigation.replace("Bottom");
        } else {
          navigation.replace("VerifyEmail");
        }
      }
    });

    return unsubscribe;
  }, []);


  return (
    <Box flex={1} safeAreaTop bg="white">
    <StatusBar style="dark" />
      <Center w="full" h={300}>
        <Image
          source={require("../../assets/logo_bg.png")}
          alt="logo"
          size="2xl"
        />
      </Center>

      <Text style={{ fontWeight: "bold", textAlign: "center" }} marginY={5}>
        To continue, kindly Register or Login
      </Text>

      <VStack space={6} px={5} alignItems="center">
        <CButton
          bg={Colors.main}
          color="white"
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </CButton>

        <CButton
          bg="white"
          color={Colors.submain}
          type="outline"
          borderColor={Colors.submain}
          borderWidth="3"
          onPress={() => navigation.navigate("Login")}
        >
          LOGIN
        </CButton>
      </VStack>
    </Box>
  );
}

export default NotLoggedInView;
