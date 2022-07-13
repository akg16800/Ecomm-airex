import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";

import React, { useState, useEffect } from "react";
import { SearchComponent } from "../../components/searchComponent";
import { Scrollist } from "./ScrolList";
import { FilteredComponent } from "./filteredComponent";
import { CategoryFilter } from "./categoryFilter";

const data = require("../../../assets/084 products.json");
const productcategories = require("../../../assets/categories.json");

var { height } = Dimensions.get("window");

export const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState(false);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(productcategories);
    setProductsCtg(data);
    setActive(-1);
    setInitialState(products);
    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive();

      setProductsCtg([]);
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  //categories

  const changeCtg = (ctg) => {
    console.log(ctg);
    console.log(products[0].category);
    {
      ctg === "categories"
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((item) => item.category.$oid === ctg)
            ),
            setActive(true),
          ];
    }
  };
  console.log(productsCtg);

  return (
    <View>
      <View>
        <SearchComponent
          onOpen={openList}
          onClose={onBlur}
          search={searchProduct}
        />

        {focus === true ? (
          <FilteredComponent
            filteredData={productsFiltered}
            navigation={props.navigation}
          />
        ) : (
          <ScrollView>
            <CategoryFilter
              categories={categories}
              categoriesFilter={changeCtg}
              productsCtg={productsCtg}
              active={active}
              setActive={setActive}
            />
            {productsCtg.length > 0 ? (
              <Scrollist navigation={props.navigation} products={productsCtg} />
            ) : (
              <View style={styles.center}>
                <Text>No Items found</Text>
              </View>
            )}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 40,
    flex: 1,
    flexDirection: "column",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "white",
    paddingBottom: 50,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
