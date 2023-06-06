import React from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Rating from "./Rating";
import Message from "./Notifications/Message";
import Colors from "../color";
import { useState } from "react";
import CButton from "./CButton";

export default function Review() {
  const [ratings, setRatings] = useState("");

  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEWS
      </Heading>
      {/* If there is no review */}
      {/* <Message
        color={Colors.submain}
        bg="gray.100"
        children={"NO REVIEW"}
        bold
      /> */}

      {/* Review */}
      <Box p={3} bg="gray.100" mt={5} rounded={5}>
        <Heading fontSize={15} color="black">
          John Doe
        </Heading>
        <Rating value={4} />
        <Text mb={3}>May 15, 2023</Text>

        <Message
          color="black"
          bg="white"
          size={12}
          children={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel dui sed diam convallis consequat."
          }
        />
      </Box>

      {/* <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          ADD A REVIEW
        </Heading>

        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg="gray.100"
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose rate"
              _selectedItem={{
                bg: "gray.200",
                endIcon: <CheckIcon size={4} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
              <Select.Item label="4 - Great" value="4" />
            </Select>
          </FormControl>

          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This is good....."
              borderWidth={0}
              bg="gray.100"
              py={4}
              _focus={{
                bg: "gray.100",
              }}
            ></TextArea>
          </FormControl>

          <CButton bg={Colors.main} color="white">
            SUBMIT
          </CButton>
          
          <Message
            color="white"
            bg="black"
            children={"Please 'Login' to write a review"}
          />
        </VStack>
      </Box> */}
    </Box>
  );
}
