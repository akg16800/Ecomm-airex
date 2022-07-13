import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { FavouriteComponent } from "../../components/favourites/favComponent";
var { width } = Dimensions.get("window");

export const ProductCard = (props) => {
  console.log("in card view");
  console.log(props);

  const { name, price, image, countInStock } = props;

  return (
    <View style={styles.container}>
      <FavouriteComponent item={props} />

      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: image
            ? image
            : "https://5.imimg.com/data5/YD/LI/MY-15940038/box-500x500.jpg",
        }}
      />

      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15, -3) + "..." : name}
      </Text>
      <Text style={styles.price}>{price}</Text>
      <View style={{ marginBottom: 40, width: "80%" }}>
        <Button title="Interested" color={"coral"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.45,
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
    elevation: 8,
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 10,
    paddingBottom: 40,
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    // position: "absolute",
    // top: -25,
  },
  card: {
    marginBottom: 10,
    height: width / 20 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 10,
  },
});
