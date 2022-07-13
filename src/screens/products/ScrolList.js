import React from "react";
import { FlatList, View, StyleSheet, Text, Dimensions } from "react-native";
import { ProductList } from "./productList";


var { height } = Dimensions.get("window");

export const Scrollist = (props) => {
  const { products } = props;
  console.log("Scroll list");
  console.log(products);
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductList
            navigation={props.navigation}
            key={item.id}
            item={item}
          />
        )}
        keyExtractor={(item) => item.name}
        numColumns={2}
        horizontal={false}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: height,
    // flex: 1,
    // flexDirection: "column",
    // alignItems: "flex-start",
    // flexWrap: "wrap",
    backgroundColor: "gainsboro",
    paddingBottom: 200,
  },
});
