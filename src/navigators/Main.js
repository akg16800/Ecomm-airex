import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";
import { MyStack } from "./HomeNavigator";
import { TopMain } from "./TopMain";
import { ChatScreen } from "../screens/chat/chat";
import { UserScreen } from "../screens/user/user";
import { FavouritesContextProvider } from "../services/favourites/favourites-context";
import { UserNavigator } from "./userNavigator";

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <FavouritesContextProvider>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={MyStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon
                name="home"
                style={{ position: "relative" }}
                color={color}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon1
                name="message-minus"
                style={{ position: "relative" }}
                color={color}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SELL"
          component={MyStack}
          options={{
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  position: "absolute",
                  bottom: 5,
                  fontWeight: "bold",
                  backgroundColor: "white",
                  borderRadius: 50,
                }}
              >
                <Icon4 name="pluscircleo" color={color} size={50} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="MY ADS"
          component={TopMain}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon4
                name="heart"
                style={{ position: "relative" }}
                color={color}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={UserNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon
                name="user-circle-o"
                style={{ position: "relative" }}
                color={color}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </FavouritesContextProvider>
  );
};
