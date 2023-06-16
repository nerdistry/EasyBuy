import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import CartView from '../Screens/CartView';
import CategoryView from '../Screens/CategoryView';
import Homepage from "../Screens/Homepage";
import PaymentView from '../Screens/PaymentView';
import PlaceOrderView from '../Screens/PlaceOrderView';
import ProfileView from '../Screens/ProfileView';
import ShippingView from '../Screens/ShippingView';
import ViewOrderDetails from '../Screens/ViewOrderDetails';
import ViewProduct from '../Screens/ViewProduct';
import WishlistView from '../Screens/WishlistView';


const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
          initialRouteName="Bottom"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Cart" component={CartView} />
          <Stack.Screen name="Profile" component={ProfileView} />
          <Stack.Screen name="Wishlist" component={WishlistView} />
          <Stack.Screen name="Category" component={CategoryView} />
          <Stack.Screen name="Product" component={ViewProduct} />
          <Stack.Screen name="Shipping" component={ShippingView} />
          <Stack.Screen name="Payment" component={PaymentView} />
          <Stack.Screen name="OrderDetails" component={ViewOrderDetails} />
          <Stack.Screen name="Placeorder" component={PlaceOrderView} />
        </Stack.Navigator>
  )
}

export default StackNav