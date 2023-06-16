import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Spacer,
  Text,
  VStack,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { auth } from "../../firebase";
import Colors from "../color";

const LogoutModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);

  const _signOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Auth");
        setShowModel(false);
      })
      .catch((e) => alert(e.message));
  };

  return (
    <Center>
      <Pressable onPress={() => setShowModel(true)}>
        <AntDesign name="poweroff" size={20} color="white" />
      </Pressable>

      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxW="350">
          <Modal.CloseButton />
          <Modal.Header>Log Out</Modal.Header>
          <Modal.Body>
            <Text fontSize={12} color="black">
              Are you sure you want to log out?
            </Text>
          </Modal.Body>
          <Modal.Footer alignItems="flex-end">
            {/* CONFIRM */}
            <Button
              w="23%"
              bg={Colors.main}
              h={45}
              _text={{ color: "white", fontWeight: "bold" }}
              onPress={_signOut}
              mr={3}
              _pressed={{
                bg: Colors.main,
              }}
            >
              Yes
            </Button>
            
            {/* CANCEL */}
            <Button
              w="23%"
              bg="red.600"
              h={45}
              _text={{ color: "white", fontWeight: "bold" }}
              onPress={() => {
                setShowModel(false);
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              No
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default LogoutModel;
