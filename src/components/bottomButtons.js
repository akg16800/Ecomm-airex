import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

var { height } = Dimensions.get("window");

export const BottomButton = () => {
  return (
    <View style={styles.container}>
      <Button
        icon="message-outline"
        mode="contained"
        color="blue"
        style={{ flex: 1, marginRight: 5, padding: 5 }}
      >
        Chat
      </Button>
      <Button
        mode="contained"
        icon="offer"
        color="blue"
        style={{ flex: 1, marginLeft: 5, padding: 5 }}
      >
        Make an Offer
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    paddingHorizontal: 10,
    padding: 15,
    backgroundColor: "gainsboro",
  },
  inner: {
    flex: 1,
  },
});
