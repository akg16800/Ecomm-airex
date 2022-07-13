import React from "react";
import { useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon4 from "react-native-vector-icons/AntDesign";

import { FavouritesContext } from "../../services/favourites/favourites-context";

export const Favourites = ({ navigation }) => {
  const { favourites, addFav, removeFav } = useContext(FavouritesContext);
  console.log("inside favourites section");
  console.log(favourites);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.fav}>
          <Icon4
            name="heart"
            style={{ position: "absolute", top: 10, right: 10 }}
            size={25}
          />
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: "https://images-na.ssl-images-amazon.com/images/I/81CxXmRFnBL.jpg",
            }}
          />
          <View style={styles.detail}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              $15000
            </Text>
            <Text
              style={{
                fontSize: 17,
              }}
            >
              Item Name
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        {favourites.map((item) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Product Detail", { item: item })
                }
              >
                <View style={styles.fav}>
                  <TouchableOpacity
                    style={{ position: "absolute", top: 10, right: 10 }}
                    onPress={() => removeFav(item)}
                  >
                    <Icon4 name="heart" size={30} color="blue" />
                  </TouchableOpacity>
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{
                      uri: item.image,
                    }}
                  />
                  <View style={styles.detail}>
                    <Text
                      style={{
                        fontSize: 19,
                        fontWeight: "bold",
                      }}
                    >
                      {item.price}
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  image: {
    width: 80,
    height: 80,
    flex: 2,
    borderRadius: 10,
  },
  fav: {
    height: 110,
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 6,
    padding: 7,
  },
  detail: {
    flex: 5,
    marginLeft: 20,

    justifyContent: "center",
  },
});
