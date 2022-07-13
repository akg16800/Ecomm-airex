import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Body,
  ListItem,
  Thumbnail,
  Text,
} from "native-base";

export const SearchedProducts = (props) => {
  const { productsFiltered } = props;
  return (
    <Content>
      {productsFiltered.length > 0 ? (
        <ListItem key={item_.id} avatar>
          <Left>
            <Thumbnail
              source={{
                uri: item.image
                  ? item.image
                  : "https://5.imimg.com/data5/YD/LI/MY-15940038/box-500x500.jpg",
              }}
            />
          </Left>
          <Body>
            <Text>{item.name}</Text>
            <Text note>{item.description}</Text>
          </Body>
        </ListItem>
      ) : (
        <View style={styles.center}>
          <Text style={{ alignSelf: "center" }}>
            No Products matched with your searched criteria
          </Text>
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
