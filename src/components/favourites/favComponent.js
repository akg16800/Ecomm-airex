import React, { useState, useContext } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../services/favourites/favourites-context";

export const FavouriteComponent = ({ item }) => {
  const { favourites, addFav, removeFav } = useContext(FavouritesContext);
  console.log(favourites);

  const isFavourite = favourites.find((r) => r.name === item.name);
  //   const isFavourite = false;
  return (
    <TouchableOpacity
      style={styles.fav}
      onPress={() => (!isFavourite ? addFav(item) : removeFav(item))}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "blue" : "blue"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fav: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 5,
  },
});
