import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Favourites } from "../screens/ads/favourites";
import { MyAds } from "../screens/ads/myAds";

const Stack = createStackNavigator();

export const FavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
