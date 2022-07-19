import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserScreen } from "../screens/user/user";
import { AccountScreen } from "../screens/user/account";
import { LoginScreen } from "../screens/Authentication/login";

const Stack = createStackNavigator();

export const UserNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="user"
        component={UserScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
