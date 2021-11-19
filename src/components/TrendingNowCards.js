import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { sectionSubHeadingBox, sectionSubHeadingText } from "../styles";

import colors from "../../assets/colors/colors";

const TrendingNowCards = (props) => {
  const membershipImage = {
    gold: require("../../assets/images/gold.png"),
    silver: require("../../assets/images/silver.png"),
    bronze: require("../../assets/images/bronze.png"),
  };
  return (
    <>
      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>Trending Now</Text>
        <Text>SEE ALL</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.trendingNowData}
        keyExtractor={(trendingItem) => trendingItem.id}
        renderItem={(trendingItem) => {
          return (
            <TouchableOpacity>
              <View style={styles.trendingNowItemsView}>
                <Image source={trendingItem.item.source} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  trendingNowItemsView: {
    justifyContent: "space-between",
    padding: 5,
    flexDirection: "row",
    marginHorizontal: 7,
    marginTop: 7,
  },
});

export default TrendingNowCards;
