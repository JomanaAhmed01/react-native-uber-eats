import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import RootNavigation from "./RootNavigation";

export default function App() {
  return (
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
  );
}
