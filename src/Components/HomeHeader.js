import {
  Box,
  HStack,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Colors from "../color";

function HomeHeader() {
  return (
    <Box w="full" px={5} bg={Colors.main} safeAreaTop pt={2}>
      <Box flexDirection="row">
        <Box flexDirection="row" flex={1}>
          <Image
            source={require("../../assets/logo.png")}
            alt="logo"
            size="sm"
            h={10}
            ml={-4}
            resizeMode="cover"
          />
          <Text color="white">
            <Text style={{ fontWeight: "bold" }}>Hi King,</Text>
            {"\n"}Let's Get Started!
          </Text>
        </Box>

        <Pressable mt={3} paddingLeft={3}>
          <Entypo name="shopping-cart" size={24} color="white" />
          <Box
            px={1}
            rounded="full"
            position="absolute"
            top={-13}
            left={5}
            bg="red.700"
            _text={{
              color: "white",
              fontSize: "11px",
            }}
          >
            2
          </Box>
        </Pressable>

        <Pressable mt={3} paddingLeft={3}>
          <AntDesign name="poweroff" size={20} color="white" />
        </Pressable>
      </Box>

      <Box flexDirection="row" alignItems="center">
        <Box
          flexDirection="row"
          flex={1}
          bg="gray.200"
          h={8}
          alignItems="center"
          alignSelf="center"
          borderRadius={10}
          paddingX={2}
          my={4}
        >
          <AntDesign name="search1" size={24} color={Colors.main} />
          <Input
            placeholder="Clothes and shoes ...."
            bg="gray.200"
            flex={1}
            variant="unstyled"
            h={8}
            borderWidth={0}
            borderRadius={10}
            _text={{
              color: "black",
            }}
          />
        </Box>
        <Pressable ml={2}>
          <AntDesign name="filter" size={24} color="white" />
        </Pressable>
      </Box>
    </Box>
  );
}

export default HomeHeader;
