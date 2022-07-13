import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { ProductList } from "../screens/products/productList";
import { FavouritesContext } from "../services/favourites/favourites-context";

export const Details = (props) => {
  const { favourites, addFav, removeFav } = useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.name === props.item.name);
  const { name, price, description } = props.item;
  console.log(props.name);
  return (
    <View>
      <View>
        <View style={styles.headingSection}>
          <Text style={styles.title}>{name}</Text>
          <TouchableOpacity
            style={styles.icon}
            onPress={() =>
              !isFavourite ? addFav(props.item) : removeFav(props.item)
            }
          >
            <AntDesign
              name={isFavourite ? "heart" : "hearto"}
              size={30}
              color={isFavourite ? "blue" : "black"}
            />
          </TouchableOpacity>
          <AntDesign
            name="sharealt"
            size={30}
            color="black"
            style={[styles.icon, { marginHorizontal: 12 }]}
          />
        </View>
        <View style={styles.priceSection}>
          <Text style={styles.price}>Price:</Text>

          <Text
            style={{
              flex: 3,
              fontSize: 18,
              color: "red",
              fontWeight: "bold",
            }}
          >
            {price}
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
            }}
          >
            Posted On: July 07
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.details}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Description
        </Text>
        <Text>{description}</Text>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View>
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Sold By:
        </Text>

        <View style={styles.seller}>
          <View
            style={{
              flex: 2,
            }}
          >
            <Avatar.Image
              size={50}
              source={require("../../assets/userIcon.jpg")}
            />
          </View>
          <View style={styles.sellerInner}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Abhay Bhai
            </Text>
            <Text>Member Since: July 02</Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingSection: {
    flex: 1,
    flexDirection: "row",
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 23,
    flex: 9,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  icon: {
    flex: 1,
  },
  priceSection: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 10,
  },
  details: {
    marginVertical: 10,
    flexDirection: "column",
    height: 115,
    paddingHorizontal: 10,
  },
  seller: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 15,
    flex: 1,
    marginVertical: 15,
  },
  sellerInner: {
    flex: 8,
  },
});
