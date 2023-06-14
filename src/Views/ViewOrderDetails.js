import { Box, Heading, ScrollView } from "native-base";
import React, { useLayoutEffect } from "react";
import OrderInfo from "../Components/Orders/OrderInfo";
import { FontAwesome,FontAwesome5,Ionicons } from "@expo/vector-icons";
import OrderItems from "../Components/Orders/OrderItems";
import ViewOrderModel from "../Components/ViewOrderModel";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

function ViewOrderDetails() {
const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerShadowVisible: true,
      headerTitle: "My Order",
      headerTitleStyle: { color: "black" },
      headerStyle: { backgroundColor: "white" },
      headerTitleAlign: "center",
      headerTintColor: "black",
    });
  }, [navigation]);

  return (
    <Box bg="gray.100" flex={1} safeArea>
        <StatusBar style="dark" />

      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="King David"
            text="king.david@gmail.com"
            icon={<FontAwesome name="user" size={30} color="white" />}
          />
          <OrderInfo
            title="DELIVERY INFO"
            subTitle="Shipping To: Nairobi"
            text="M-Pesa No: 0712345347"
            icon={<FontAwesome5 name="shipping-fast" size={30} color="white" />}
          />
          <OrderInfo
            title="LOCATION INFO"
            subTitle="Address: Madaraka Estate"
            text="Siwaka Plaza, P.O BOX 1234"
            icon={<Ionicons name="location-sharp" size={30} color="white" />}
          />
        </ScrollView>
      </Box>

      {/* Order Item */}
      <Box px={6} flex={1} pb={10}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>

        <OrderItems />

        {/* Total */}
        <ViewOrderModel />
      </Box>
    </Box>
  );
}

export default ViewOrderDetails;
