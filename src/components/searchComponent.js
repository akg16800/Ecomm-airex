import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const SearchComponent = (props) => {
  const [text, setText] = useState(null);
  const [icons, setIcons] = useState(false);

  const searching = (t) => {
    setText(t);
    props.search(t);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.icon}>
          <AntDesign
            name="bars"
            size={28}
            color="white"

            // onPress={() => navigation.openDrawer()}
          />
        </View>

        <TextInput
          placeholder="Search for an item"
          onChangeText={searching}
          onFocus={props.onOpen}
          right={
            <TextInput.Icon
              name="close"
              onPress={() => {
                props.onClose(), setText(" ");
              }}
            />
          }
          left={<TextInput.Icon name="magnify" />}
          style={{
            width: "90%",
            backgroundColor: "white",
            height: 50,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "coral",
    height: 80,
  },
  icon: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    height: 60,
    marginTop: 30,
    paddingLeft: 5,
  },
  search: {
    flex: 9,
    width: "85%",
    height: 45,
  },
  inner: {
    height: 80,
    marginTop: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
