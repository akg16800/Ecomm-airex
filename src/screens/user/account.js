import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { ListComponent } from "../../components/account/listItem";

export const AccountScreen = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.img}>
          <Avatar.Image
            size={105}
            source={require("../../../assets/userIcon.jpg")}
          />
        </View>
        <View style={styles.name}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Abhay Bhai
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 17,
              fontWeight: "400",
              fontStyle: "normal",
              textDecorationLine: "underline",
            }}
          >
            view and edit your profile
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View>
        <ListComponent />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    height: 200,
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
  },
  img: {
    flex: 1.5,
  },
  name: {
    flex: 2.5,
  },
});

{
  /* <View>
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
      
    </View> */
}
