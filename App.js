<script src="http://localhost:8097"></script>;

import React from "react";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginView from "./src/Views/LoginView";
import RegisterView from "./src/Views/RegisterView";
import BottomNav from "./src/Navigation/BottomNav";
import NotLoggedInView from "./src/Views/NotLoggedInView";
import VerifyEmail from "./src/Views/VerifyEmail";

import Colors from "./src/color";
import Homepage from "./src/Views/Homepage";
import CategoryView from "./src/Views/CategoryView";
import ViewProduct from "./src/Views/ViewProduct";
import ShippingView from "./src/Views/ShippingView";
import PaymentView from "./src/Views/PaymentView";
import ViewOrderDetails from "./src/Views/ViewOrderDetails";
import PlaceOrderView from "./src/Views/PlaceOrderView";

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
