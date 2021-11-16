import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import swipeCardData from "../../data/swipeCardData";
import Carousel, { Pagination } from "react-native-snap-carousel";
import colors from "../../assets/colors/colors";

const TestScreen = (props) => {
  // activeSlide state
  const [activeSlide, setActiveSlide] = useState();

  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.cardImage}>
        <Image source={item.source} />
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={swipeCardData.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: colors.grey }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: colors.theme,
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View style={styles.box}>
      {pagination()}
      <Carousel
        ref={(c) => {
          const _carousel = c;
        }}
        data={swipeCardData}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        layout={"stack"}
        layoutCardOffset={15}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  cardImage: {
    width: 300,
  },
});

export default TestScreen;
