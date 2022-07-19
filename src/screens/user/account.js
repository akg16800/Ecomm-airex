import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { ListComponent } from "../../components/account/listItem";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../services/favourites/authentication-context";

export const AccountScreen = ({ navigation }) => {
  const { isLogged, userInfo } = useContext(AuthenticationContext);
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.img}>
          <Avatar.Image
            size={105}
            source={
              isLogged
                ? userInfo.picture
                : require("../../../assets/userIcon.jpg")
            }
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
            {isLogged ? userInfo.name : "Welcome to Airex!"}
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
            {isLogged ? "view and edit your profile" : "Log in to your Account"}
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
        {isLogged ? (
          <Button
            icon="camera"
            mode="contained"
            onPress={() => navigation.navigate("login")}
          >
            Logout
          </Button>
        ) : (
          <Button
            icon="camera"
            mode="contained"
            onPress={() => navigation.navigate("login")}
          >
            Login
          </Button>
        )}
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
