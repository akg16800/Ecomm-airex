import React from "react";
import { StatusBar, SafeAreaView } from "react-native";

export const SafeArea = ({ children }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
      {children}
    </SafeAreaView>
  );
};
