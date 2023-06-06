<script src="http://localhost:8097"></script>;

import React from "react";
import { Box, NativeBaseProvider, Text } from "native-base";
import CartView from "./src/Views/CartView";
import ProfileView from "./src/Views/ProfileView";

export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileView />
    </NativeBaseProvider>
  );
}
