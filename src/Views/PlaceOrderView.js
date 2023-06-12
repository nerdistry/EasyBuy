import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import OrderInfo from "../Components/Orders/OrderInfo";
import { FontAwesome,FontAwesome5,Ionicons } from "@expo/vector-icons";
import OrderItems from "../Components/Orders/OrderItems";
import PlaceOrderModel from "../Components/Orders/PlaceOrderModel";

function PlaceOrderView() {
  return (
    <Box bg="gray.100" flex={1} safeArea pt={6}>
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
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>

        <OrderItems />

        {/* Total */}
        <PlaceOrderModel />
      </Box>
    </Box>
  );
}

export default PlaceOrderView;
