import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import CartView from '../Views/CartView';
import CategoryView from '../Views/CategoryView';
import Homepage from "../Views/Homepage";
import PaymentView from '../Views/PaymentView';
import PlaceOrderView from '../Views/PlaceOrderView';
import ProfileView from '../Views/ProfileView';
import ShippingView from '../Views/ShippingView';
import ViewOrderDetails from '../Views/ViewOrderDetails';
import ViewProduct from '../Views/ViewProduct';
import WishlistView from '../Views/WishlistView';


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