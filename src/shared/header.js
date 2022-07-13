import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-web";
import { Searchbar } from "react-native-paper";

export const Header = () => {
  //   return (
  //     // <View style={styles.header}>
  //     //   <FontAwesome name="navicon" size={24} color="white" style={styles.icon} />
  //     //   <Searchbar placeholder="Search for an item" style={styles.search} />
  //     // </View>
  //   )
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    // alignContent: "center",
    // justifyContent: "center",
    padding: 10,
    marginTop: 40,
    backgroundColor: "coral",

    height: 55,
  },
  image: {
    flex: 1,
  },
  search: {
    width: "80%",
    height: 35,
    flex: 9,
  },
  icon: {
    marginTop: 5,
    flex: 1,
    paddingRight: 0,
  },
});
