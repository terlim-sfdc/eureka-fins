import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Surface, useTheme } from "react-native-paper";
import colors from "../../../assets/colors/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Recommendations = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.subtitleContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Products recommended for customer
        </Text>
      </View>
      {/* View Box for Recommended Products Flatlist */}
      <View style={{ height: 210 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={props.recommendedItems}
          keyExtractor={(recommendedItem) => recommendedItem.id}
          renderItem={(recommendedItem) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigate("RecommendedItemsCardsScreen")}
              >
                <View style={styles.recommendedItemsView}>
                  <Image source={recommendedItem.item.source} />
                  <Text style={styles.recommendedItemsText}>
                    {recommendedItem.item.title}
                  </Text>
                </View>
                <View style={styles.probabilityContainer}>
                  <Text style={styles.probabilityText}>
                    {recommendedItem.item.probability}%
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <TouchableOpacity>
        <Surface
          style={[styles.infoCards, { elevation: 4, marginVertical: 20 }]}
        >
          <Text style={{ fontWeight: "bold" }}>
            Reserve & Location Products for Customer
          </Text>
        </Surface>
      </TouchableOpacity>

      <View style={styles.subtitleContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Good to let customer know
        </Text>
      </View>

      <Surface style={[styles.infoCards, { elevation: 1 }]}>
        <FontAwesome5 name="percentage" style={styles.infoCardIcons} />
        <Text style={{ flex: 7 }}>
          20% off selected kids wear for 2 kids, 10 % off selected men's wear
        </Text>
        <FontAwesome5 name="info-circle" style={[styles.infoCardIcons]} />
      </Surface>

      <Surface style={[styles.infoCards, { elevation: 1 }]}>
        <FontAwesome5 name="gift" style={styles.infoCardIcons} />
        <Text style={{ flex: 7 }}>
          Upload a photo of your purchase using the #gotbags hashtag to receive
          a free gift
        </Text>
        <FontAwesome5 name="info-circle" style={styles.infoCardIcons} />
      </Surface>

      <Surface style={[styles.infoCards, { elevation: 1 }]}>
        <FontAwesome5 name="percentage" style={styles.infoCardIcons} />

        <Text style={{ flex: 7 }}>
          Buy 3 pairs of Men's wear pants and get a 15% discount on all items
        </Text>
        <FontAwesome5 name="info-circle" style={styles.infoCardIcons} />
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
  },
  subtitleContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  recommendedItemsView: {
    width: 155,
    marginHorizontal: 7,
  },
  recommendedItemsText: {
    fontSize: 15,
    marginHorizontal: 6,
  },
  probabilityContainer: {
    marginTop: -200,
    marginLeft: 10,
    borderWidth: 0,
    borderRadius: 1000,
    width: 60,
    backgroundColor: colors.theme,
    padding: 5,
  },
  probabilityText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
  },
  infoCards: {
    margin: 5,
    height: 70,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  infoCardIcons: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: colors.theme,
    flex: 1,
  },
});

export default Recommendations;
