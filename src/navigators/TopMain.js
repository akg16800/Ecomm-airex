import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MyAds } from "../screens/ads/myAds";
import { Favourites } from "../screens/ads/favourites";
import { FavStack } from "./favNavigator";
import { AdStack } from "./AdsNavigator";

const Tab = createMaterialTopTabNavigator();

export const TopMain = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Posts" component={AdStack} />
      <Tab.Screen name="Favourites" component={FavStack} />
    </Tab.Navigator>
  );
};
