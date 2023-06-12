import { Center, Heading, Text } from "native-base";
import React from "react";
import Colors from "../../color";

const OrderInfo = ({ icon, title, subTitle, text, success, danger }) => {
  return (
    <Center
      bg="white"
      w={200}
      py={4}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
    >
        <Center bg={Colors.submain} w={60} h={60} rounded="full">
            {icon}
        </Center>
        <Heading bold fontSize={15} isTruncated mt={3} mb={2} color="black">
            {title}
        </Heading>
        <Text fontSize={14} color="black" fontWeight="medium">
            {subTitle}
        </Text>
        <Text fontSize={14} textAlign="center" italic color="black" fontWeight="medium">
            {text}
        </Text>

        {/* Status */}
        {success && (
            <Center py={2} mt={2} rounded={5} w="full" bg="blue.400">
                <Text fontSize={12} color="white">
                    Paid on Mar 24 2023
                </Text>
            </Center>
        )}
        {danger && (
            <Center py={2} mt={2} rounded={5} w="full" bg="red.600">
                <Text fontSize={12} color="white">
                    Not Delivered
                </Text>
            </Center>
        )}

    </Center>
  );
};

export default OrderInfo;
