import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  TextInput,
  ScrollView,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../../assets/colors/colors";
import { TabView, SceneMap } from "react-native-tab-view";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

import { useFonts } from "expo-font";
import Monthly from "./Monthly";
import Weekly from "./Weekly";
import Yearly from "./Yearly";
import { headerContainer } from "../../styles";
import HeaderText from "../../components/HeaderText";

/* Actual Customer Detail Screen */

const MeScreen = ({ route, navigation }) => {
  //const { customer } = route.params;
  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

  {
    /* load custom fonts */
  }
  let [fontsLoaded] = useFonts({
    Bodoni: require("../../../assets/fonts/Bodoni.ttf"),
    BodoniBold: require("../../../assets/fonts/Bodoni-bold.ttf"),
  });

  // page is weekly, monthly, yearly
  const [page, setPage] = useState("weekly");

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      // Overall Container Wrapper
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        bounces={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={headerContainer}>
            <HeaderText text="Sarah Tan" />
          </View>

          {/* Search */}
          <View style={styles.search}>
            <Feather name="search" style={styles.searchIconStyle} />
            <TextInput
              placeholder="Search"
              style={styles.searchInputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              defaultValue={"Search"}
            />
          </View>
        </View>

        {/* Content Body */}
        <View style={styles.customerDetailBox}>
          <Text>Content here</Text>

          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              width: "92%",
              alignSelf: "center",
            }}
          />

          <Text>Content here</Text>
        </View>

        {/* View for Recommendation and Statistics buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            style={[
              page === "weekly"
                ? styles.ActiveTabButton
                : styles.InActiveTabButton,
            ]}
            onPress={() => {
              setPage("weekly");
            }}
          >
            <Text style={styles.RecommendationButtonText}>Weekly</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              page === "monthly"
                ? styles.ActiveTabButton
                : styles.InActiveTabButton,
            ]}
            onPress={() => {
              setPage("monthly");
            }}
          >
            <Text style={styles.StatisticsButtonText}>Monthly</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              page === "yearly"
                ? styles.ActiveTabButton
                : styles.InActiveTabButton,
            ]}
            onPress={() => {
              setPage("yearly");
            }}
          >
            <Text style={styles.StatisticsButtonText}>Yearly</Text>
          </TouchableOpacity>
        </View>

        {/* Show page based on button pressed and pass down customer prop */}
        {page === "weekly" && <Weekly />}
        {page === "monthly" && <Monthly />}
        {page === "yearly" && <Yearly />}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  header: {
    height: 177,
    backgroundColor: colors.theme,
    padding: 10,
  },
  search: {
    backgroundColor: "#5d4ba3",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 5,
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 15,
    padding: 7,
    color: colors.white,
  },
  searchIconStyle: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: 10,
    color: colors.white,
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
  customerDetailBox: {
    height: 250,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  customerDetailLineItemBox: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  customerDetailLineItemIcons: {
    marginHorizontal: 15,
    color: colors.theme,
  },
  customerDetailLineItemContent: { fontSize: 15 },
  RecommendationButtonText: {
    fontSize: 15,
    color: colors.theme,
    fontFamily: "BodoniBold",
    alignContent: "space-between",
    marginLeft: 8,
  },
  StatisticsButtonText: {
    fontSize: 15,
    color: colors.theme,
    fontFamily: "BodoniBold",
    alignContent: "space-between",
    marginLeft: 8,
  },
  ActiveTabButton: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
    borderBottomColor: colors.yellow,
    borderBottomWidth: 5,
  },
  InActiveTabButton: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  RecommendationOrStatisticsView: {
    height: 1000,
  },
});

export default MeScreen;
