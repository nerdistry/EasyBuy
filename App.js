<script src="http://localhost:8097"></script>;

import React from "react";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginView from "./src/Screens/LoginView";
import RegisterView from "./src/Screens/RegisterView";
import BottomNav from "./src/Navigation/BottomNav";
import NotLoggedInView from "./src/Screens/NotLoggedInView";
import VerifyEmail from "./src/Screens/VerifyEmail";

import Colors from "./src/color";
import Homepage from "./src/Screens/Homepage";
import CategoryView from "./src/Screens/CategoryView";
import ViewProduct from "./src/Screens/ViewProduct";
import ShippingView from "./src/Screens/ShippingView";
import PaymentView from "./src/Screens/PaymentView";
import ViewOrderDetails from "./src/Screens/ViewOrderDetails";
import PlaceOrderView from "./src/Screens/PlaceOrderView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{
            headerShown: false,
            headerBackTitleVisible: true,
            headerStyle: { backgroundColor: Colors.main },
            headerTitleStyle: { color: "white" },
            headerTitleAlign: "center",
            headerTintColor: "white",
          }}
        >
          <Stack.Group>
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
            <Stack.Screen name="Auth" component={NotLoggedInView} />
            <Stack.Screen name="Login" component={LoginView} />
            <Stack.Screen name="Register" component={RegisterView} />
          </Stack.Group>

          <Stack.Screen name="Bottom" component={BottomNav} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
