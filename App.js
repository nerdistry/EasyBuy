<script src="http://localhost:8097"></script>;

import React from "react";
import { NativeBaseProvider } from "native-base";
import PlaceOrderView from "./src/Views/PlaceOrderView";


export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrderView />
    </NativeBaseProvider>
  );
}
