import React from "react";
import {
  View,
  Stylesheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ProductCard } from "./productCard";
var { width } = Dimensions.get("window");

export const ProductList = (props) => {
  const { item } = props;
  console.log("product list");
  console.log(props);
  //   console.log(width);
  return (
    <TouchableOpacity
      style={{ width: "50%" }}
      onPress={() =>
        props.navigation.navigate("Product Detail", { item: item })
      }
    >
      <View style={{ width: width / 2, backgroundColor: "white" }}></View>
      <View>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};
