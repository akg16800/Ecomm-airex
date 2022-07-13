import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
} from "react-native";

export const CategoryFilter = (props) => {
  //   console.log(props.categories[0]);
  return (
    <ScrollView style={styles.container} bounces={true} horizontal={true}>
      <TouchableOpacity
        key={1}
        onPress={() => {
          props.categoriesFilter("categories"), props.setActive(-1);
        }}
      >
        <View
          style={[
            styles.icon,
            props.active == -1 ? styles.active : styles.inactive,
          ]}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            categories
          </Text>
        </View>
      </TouchableOpacity>
      {props.categories.map((item) => (
        <TouchableOpacity
          // key={item._id}
          onPress={() => {
            props.categoriesFilter(item._id.$oid),
              props.setActive(props.categories.indexOf(item));
          }}
        >
          <View
            style={[
              styles.icon,
              props.active == props.categories.indexOf(item)
                ? styles.active
                : styles.inactive,
            ]}
          >
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 5,
    paddingVertical: 5,
    // paddingHorizontal: 5,
    paddingHorizontal: 5,
    flex: 1,
    height: 60,
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    // paddingHorizontal: 14,
    borderRadius: 15,
    marginRight: 10,
  },
  active: {
    backgroundColor: "green",
  },
  inactive: {
    backgroundColor: "orange",
  },
});
