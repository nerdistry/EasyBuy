import {
  Box,
  Button,
  Center,
  Heading,
  Modal,
  Pressable,
  Text,
} from "native-base";
import React, { useEffect } from "react";
import Message from "../Components/Notifications/Message";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";
import Colors from "../color";
import { useLayoutEffect } from "react";

function VerifyEmail({ navigation }) {
  const [showModel, setShowModel] = useState(false);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     headerShadowVisible: false,
  //     headerTitleStyle: { color: "black" },
  //     headerStyle: { backgroundColor: "white" },
  //     headerTitleAlign: "center",
  //     headerTintColor: "black",
  //     headerTitle: "Verify Email",
  //   });
  // }, [navigation]);

  const resendEmail = () => {
    sendEmailVerification(auth?.currentUser);
  };


  return (
    <Modal flex={1} alignItems="center" justifyContent="center">
      <Modal.Header>
        <Heading fontSize={16}>Verify Your Email</Heading>
      </Modal.Header>
      <Modal.Body>
        <Text fontSize={16} italic>
          Click the link sent to <Text bold>Your Email</Text> to verify and
          continue
        </Text>
        <Pressable
          color="primary.400"
          fontFamily={14}
          flexDirection="row"
          onPress={resendEmail}
        >
          <Text>Resend Email</Text>
          <MaterialCommunityIcons name="gmail" size={24} color="black" />
        </Pressable>
      </Modal.Body>
      <Modal.Footer>
        <Button
          _text={{ fontWeight: "bold", fontSize: "15" }}
          color={Colors.submain}
          onPress={() => setShowModel(false)}
        >
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerifyEmail;
