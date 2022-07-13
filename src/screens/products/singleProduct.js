import React, { useEffect, useState } from "react";
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ImageView from "react-native-image-viewing";
import { Details } from "../../components/details";
import { BottomButton } from "../../components/bottomButtons";

const images = [
  {
    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
  },
  {
    uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
  },
  {
    uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
  },
  {
    uri: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
];
const data = require("../../../assets/084 products.json");

export const SingleProduct = (props) => {
  const [image, setImage] = useState([]);
  const [item, setItem] = useState(props.route.params.item);

  console.log("Inside single Product");

  console.log(item);

  const visibleHandler = () => {
    setIsVisible(true);
  };
  const [visible, setIsVisible] = useState(false);
  useEffect(() => {
    // setImage([
    //   "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    //   "https://i.pcmag.com/imagery/reviews/05l2EoHgxLKDb5dq2UGTpdR-17.fit_lim.size_625x365.v1604675195.jpg",
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXzHYBrJ2T6R4mRTmCYZwtmhDbT9hUJ1aCQyOAezHoPfDo-bWNXYg0wVomnxZwNWwHcU&usqp=CAU",
    // ]);
    setImage(data[1].image);
  }, []);

  //   console.log(image[1].image);
  console.log(images);

  return (
    <ScrollView>
      <ImageView
        images={[item.image]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />

      <SliderBox
        images={[item.image]}
        sliderBoxHeight={300}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        onCurrentImagePressed={visibleHandler}
      />

      {/* <View style={styles.firstContainer}>
        <View style={styles.price}>
          <Text>10000</Text>
        </View>
        <View></View>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>Detail</Text>
        <Text>dsjf;asdjdf;kjsjdf;dlkjsda;lkfjklsa</Text>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      /> */}
      <Details item={item} />
      <BottomButton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  price: {},
  firstContainer: {
    flexDirection: "row",
    flex: 1,
  },
});
