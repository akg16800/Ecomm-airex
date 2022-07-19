import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductContainer } from "../screens/products/productScreen";
import { SingleProduct } from "../screens/products/singleProduct";
import { TopMain } from "./TopMain";
import { ChatScreen } from "../screens/chat/chat";
import { UserScreen } from "../screens/user/user";

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProductContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Product Detail"
        component={SingleProduct}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
