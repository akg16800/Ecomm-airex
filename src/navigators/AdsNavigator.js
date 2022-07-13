import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Favourites } from "../screens/ads/favourites";
import { MyAds } from "../screens/ads/myAds";

const Stack = createStackNavigator();

export const AdStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Ads"
        component={MyAds}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
