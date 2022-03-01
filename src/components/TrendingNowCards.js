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
  return (
    <>
      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>{props.sectionTitle}</Text>
        <Text>View All</Text>
      </View>

      <View>
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  trendingNowItemsView: {
    justifyContent: "space-between",
    padding: 5,
    marginHorizontal: 7,
    marginTop: 7,
  },
});

export default TrendingNowCards;
