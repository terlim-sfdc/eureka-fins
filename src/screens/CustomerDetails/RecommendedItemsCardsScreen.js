import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { withNavigation } from "react-navigation";
import swipeCardData from "../../../data/swipeCardData";
import Carousel, { Pagination } from "react-native-snap-carousel";
import colors from "../../../assets/colors/colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const RecommendedItemsCardsScreen = ({ route, navigation }) => {
  // Check which item was clicked, and show that item first.
  // Note that activeSlide indexes from 0, while itemClicked indexes from 1
  const { itemClicked } = route.params;

  // activeSlide state
  const [activeSlide, setActiveSlide] = useState(itemClicked - 1);

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
        inactiveDotOpacity={0.5}
        inactiveDotScale={0.6}
        firstItem={itemClicked - 1}
      />
    );
  };

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconTitle}>
          <Ionicons
            name="chevron-back"
            size={32}
            color={colors.white}
            style={styles.icon}
            onPress={() => navigation.goBack()}
            title="Go back"
          />
          <Text style={styles.prevPageLink}>Customer Details</Text>
        </View>

        <Text style={styles.pageTitle}>Recommended Items</Text>
      </View>
      {pagination()}

      <View style={styles.carouselView}>
        <Carousel
          ref={(c) => {
            const _carousel = c;
          }}
          data={swipeCardData}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          layout={"stack"}
          layoutCardOffset={20}
          firstItem={itemClicked - 1}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselView: {
    alignContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginRight: 15,
  },
  cardImage: {
    width: 300,
  },
  header: {
    height: 140,
    backgroundColor: colors.theme,
    padding: 10,
  },
  iconTitle: { flexDirection: "row" },
  pageTitle: {
    fontSize: 30,
    color: colors.white,
    fontFamily: "BodoniBold",
    alignContent: "space-between",
    marginLeft: 8,
  },
  icon: { marginTop: 40, marginHorizontal: 1, color: colors.white },
  prevPageLink: {
    marginTop: 50,
    marginHorizontal: 1,
    color: colors.white,
    fontSize: 15,
  },
});

export default RecommendedItemsCardsScreen;
