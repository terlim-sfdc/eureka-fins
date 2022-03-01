import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import swipeCardData from "../../../data/swipeCardData";
import Carousel, { Pagination } from "react-native-snap-carousel";
import colors from "../../../assets/colors/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Surface, useTheme } from "react-native-paper";

// import styles and components
import {
  container,
  headerContainer,
  headerWithoutSearch,
  prevPageLinkContentBox,
  sectionSubHeadingBox,
  sectionSubHeadingText,
  subTabText,
  activeSubTabButton,
  inactiveSubTabButton,
  prevPageLink,
} from "../../styles";
import HeaderText from "../../components/HeaderTextWithAvatar";

const RecommendedItemsCardsScreen = ({ route, navigation }) => {
  // Check which item was clicked, and show that item first.
  // Note that activeSlide indexes from 0, while itemClicked indexes from 1
  const { itemClicked, customerName } = route.params;

  // activeSlide state
  const [activeSlide, setActiveSlide] = useState(itemClicked - 1);

  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  const _renderItem = ({ item, index }) => {
    return (
      <Surface style={[styles.card, { elevation: 1, borderRadius: 30 }]}>
        {<Image source={item.source} style={styles.cardImage} />}
        <Text style={styles.cardItemTitle}>{item.title}</Text>
        <Text style={{ color: colors.green, fontWeight: "bold", padding: 10 }}>
          Available in size 37
        </Text>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 2,
            width: "80%",
            alignSelf: "center",
          }}
        />
        <TouchableOpacity>
          <Text style={{ padding: 10 }}>Tap to see product details</Text>
        </TouchableOpacity>
      </Surface>
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
    <ScrollView
      style={container}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}
      bounces={false}
    >
      {/* Header */}
      <View style={headerWithoutSearch}>
        <View style={prevPageLinkContentBox}>
          <Ionicons
            name="chevron-back"
            size={32}
            color={colors.white}
            title="Go back"
            onPress={() => navigation.goBack()}
          />
          <Text style={prevPageLink}>{customerName}</Text>
        </View>
        <View style={headerContainer}>
          <HeaderText text={"Recommended"} />
        </View>
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
          itemHeight={ITEM_HEIGHT}
          layout={"stack"}
          layoutCardOffset={20}
          firstItem={itemClicked - 1}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
      <TouchableOpacity
        style={{ width: "100%", alignItems: "center" }}
        onPress={() =>
          navigation.navigate("LocateItemScreen", {
            activeItem: swipeCardData[activeSlide],
          })
        }
      >
        <Surface
          style={{
            elevation: 3,
            borderRadius: 10,
            width: "75%",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ padding: 15 }}>Locate Product</Text>
        </Surface>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: "100%", alignItems: "center" }}>
        <Surface
          style={{
            elevation: 3,
            borderRadius: 10,
            width: "75%",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ padding: 15 }}>Reserve for customer</Text>
        </Surface>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselView: {
    alignContent: "center",
    alignItems: "center",
  },
  card: {
    width: Dimensions.get("window").width * 0.75,
    height: Dimensions.get("window").height * 0.53,
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 0,
    alignItems: "center",
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
    fontFamily: "ProximaNova",
    alignContent: "space-between",
    marginLeft: 8,
  },
  backIcon: { marginTop: 40, marginHorizontal: 1, color: colors.white },
  prevPageLink: {
    marginTop: 50,
    marginHorizontal: 1,
    color: colors.white,
    fontSize: 15,
  },
  cardImage: {
    marginTop: -8,
    width: "105%",
  },
  cardItemTitle: {
    fontSize: 17,
    padding: 10,
  },
});

export default RecommendedItemsCardsScreen;
