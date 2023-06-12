import { Box, Heading, HStack, Image, ScrollView, Spacer, Text, View } from "native-base";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import CButton from "../Components/CButton";
import Rating from "../Components/Rating";
import Colors from "../color";
import Review from "../Components/Review";

function ViewProduct() {
  const [value, setValue] = useState(0);

  return (
    <Box safeArea flex={1} bg="white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/image(9).jpg")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />

        <Box px={5} pt={6}>
          <Heading bold fontSize={20} mb={2} lineHeight={22}>
            Champion Sneakers - Black
          </Heading>

          <Rating value={4} />

          <HStack space={2} alignItems="center" my={5}>
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={15}
              minValue={0}
              borderColor={Colors.main}
              rounded
              textColor="black"
              iconStyle={{color: "white"}}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />

            <Spacer />
            <Heading bold color="black" fontSize={19}>
              $3400
            </Heading>

          </HStack>
          <Text lineHeight={24} fontSize={12} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel dui sed diam convallis consequat. Proin et velit imperdiet, vulputate arcu quis, ultricies arcu. Nam condimentum enim nec lacus mollis fringilla. Integer rutrum nec velit sit amet rutrum. Mauris eget euismod diam. Aliquam vitae scelerisque lacus, ullamcorper efficitur tellus. Fusce.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel dui sed diam convallis consequat. Proin et velit imperdiet, vulputate arcu quis, ultricies arcu. Nam condimentum enim nec lacus mollis fringilla. Integer rutrum nec velit sit amet rutrum. Mauris eget euismod diam. Aliquam vitae scelerisque lacus, ullamcorper efficitur tellus. Fusce.
            </Text>

            <CButton bg={Colors.main} color="white" mt={10}>
              ADD TO CART
            </CButton>

            {/* Review */}
            <Review />
        </Box>
      </ScrollView>
    </Box>
  );
}

export default ViewProduct;
