import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import RestaurantScreen from "./src/Features/Restaurants/Screens/RestaurantScreen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

