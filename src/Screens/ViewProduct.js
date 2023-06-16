import {
  ArrowBackIcon,
  Box,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Spacer,
  Text,
  View,
} from "native-base";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import CButton from "../Components/CButton";
import Rating from "../Components/Rating";
import Colors from "../color";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";

function ViewProduct({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg="white">
      <StatusBar style="light" backgroundColor={Colors.main} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box position="relative">
          <Image
            source={{ uri: product.image }}
            alt="Image"
            w="full"
            h={300}
            resizeMode="cover"
            p={4}
          />
          
          <TouchableOpacity
            style={{ position: "absolute", top: 18, left: 10, borderWidth: 0 }}
            onPress={navigation.goBack}
          >
            <Box
              style={{
                backgroundColor: Colors.main,
                padding: 10,
              }}
              rounded="full"
              shadow={2}
            >
              <ArrowBackIcon size={6} color="white" />
            </Box>
          </TouchableOpacity>
        </Box>

        <Box px={5} pt={6}>
          <Heading bold fontSize={20} mb={2} lineHeight={22}>
            {product.name}
          </Heading>

          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />

          <HStack space={2} alignItems="center" my={5}>
            {product.countInStock > 0 ? (
              <NumericInput
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                borderColor={Colors.main}
                rounded
                textColor="black"
                iconStyle={{ color: "white" }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
                value={value}
                onChange={(num) => setValue(num)}
              />
            ) : (
              <Heading bold italic color="red.600" fontSize={12}>
                Out of stock
              </Heading>
            )}

            <Spacer />
            <Heading bold color="black" fontSize={19}>
              ${product.price}
            </Heading>
          </HStack>
          {/* <Text bold fontSize={14}>
            In Stock: {product.countInStock}
          </Text> */}
          <Text lineHeight={24} fontSize={12}>
            {product.description}
          </Text>

          <CButton
            bg={Colors.main}
            color="white"
            mt={10}
            onPress={() => navigation.navigate("Cart")}
          >
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
