import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Center, Pressable } from "native-base";
import Colors from "../color";
import ProfileView from "../Screens/ProfileView";
import CartView from "../Screens/CartView";
import StackNav from "./StackNav";
import WishlistView from "../Screens/WishlistView";
import { StatusBar } from "expo-status-bar";
import CategoryView from "../Screens/CategoryView";

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    h={70}
    w={70}
    rounded="full"
    bg={Colors.submain}
    top={-30}
    shadow={2}
  >
    {children}
  </Pressable>
);

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.submain} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.main} />
              )}
            </Center>
          ),
        }}
      />

      {/* Categories */}
      <Tab.Screen
        name="Categories"
        component={CategoryView}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <MaterialIcons
                  name="category"
                  size={24}
                  color={Colors.submain}
                />
              ) : (
                <MaterialIcons name="category" size={24} color={Colors.main} />
              )}
            </Center>
          ),
        }}
      />

      {/* Cart */}
      <Tab.Screen
        name="Cart"
        component={CartView}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Ionicons name="ios-cart" size={30} color="white" />
              ) : (
                <Ionicons name="ios-cart-outline" size={30} color="white" />
              )}
            </Center>
          ),
        }}
      />

      {/* WishList */}
      <Tab.Screen
        name="Wishlist"
        component={WishlistView}
        options={{
          
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <AntDesign name="heart" size={24} color={Colors.submain} />
              ) : (
                <AntDesign name="hearto" size={24} color={Colors.main} />
              )}
            </Center>
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileView}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color={Colors.submain} />
              ) : (
                <AntDesign name="user" size={24} color={Colors.main} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: "#fff",
    height: 45,
  },
});

export default BottomNav;
