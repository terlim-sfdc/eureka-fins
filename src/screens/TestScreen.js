import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Swiper from "react-native-realistic-deck-swiper";

//https://npm.io/package/react-native-realistic-deck-swiper
import swipeCardData from "../../data/swipeCardData";

const TestScreen = (props) => {
  // const [itemNumber, setItemNumber] = useState(0);
  _renderCard = (item) => {
    // console.log(item);
    return (
      <View
        style={{
          width: 300,
          height: 400,
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image style={styles.cardImage} source={item.source} />
        {/* <Text>{item.id}</Text> */}
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>{itemNumber}</Text> */}
      <Swiper
        cardsData={swipeCardData}
        renderCard={_renderCard}
        // onSwiped={(vector) => {
        //   console.log("on swiped");
        //   setItemNumber(itemNumber + 1);
        // }}
        // onSwipedAll={() => {
        //   console.log("onSwipedAll");
        //   setItemNumber(1);
        // }}
        // onReset={(vector) => console.log("onReset")}
        containerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        style={{
          margin: 20,
          backgroundColor: "white",
          borderColor: "black",
          borderWidth: 0,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({ cardImage: {} });

export default TestScreen;
