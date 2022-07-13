import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export const FilteredComponent = (props) => {
  const { filteredData } = props;

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Product Detail", { item: item })
        }
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: item.image
                ? item.image
                : "https://5.imimg.com/data5/YD/LI/MY-15940038/box-500x500.jpg",
            }}
          />
          <View style={styles.text}>
            <Text
              style={{
                fontSize: 15,
              }}
            >
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={ItemView}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <View>no result found</View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    height: 55,
  },
  image: {
    width: 50,
    height: 50,
    flex: 1,
  },
  text: {
    flex: 7,
    padding: 10,
    marginLeft: 10,
    height: 55,
  },
});
