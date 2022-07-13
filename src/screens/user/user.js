import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-paper";

export const UserScreen = () => {
  return (
    <View>
      <View style={styles.avatar}>
        <View style={styles.img}>
          <Avatar.Image
            size={120}
            source={require("../../../assets/userAvatar.jpg")}
          />
        </View>
        <View style={styles.name}>
          <Text>user name</Text>
          <Text>View and Edit profile</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    flexDirection: "row",
    height: 120,
    paddingHorizontal: 15,
    paddingVertical: 20,
    justifyContent: "space-around",
    alignContent: "center",
  },
  name: {
    flex: 7,
    height: 50,
  },
  img: {
    flex: 4,
    paddingRight: 20,
  },
});
