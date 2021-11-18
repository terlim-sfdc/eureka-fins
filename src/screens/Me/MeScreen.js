import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../../assets/colors/colors";

import AntDesign from "react-native-vector-icons/AntDesign";

import { useFonts } from "expo-font";
import Monthly from "./Monthly";
import Weekly from "./Weekly";
import Yearly from "./Yearly";

// Import components and styles
import {
  container,
  headerWithSearch,
  headerContainer,
  sectionSubHeadingBox,
  sectionSubHeadingText,
  subTabText,
  activeSubTabButton,
  inactiveSubTabButton,
} from "../../styles";
import HeaderText from "../../components/HeaderText";
import SearchBar from "../../components/SearchBar";

/* Actual Customer Detail Screen */

const MeScreen = ({ route, navigation }) => {
  /* Set up state for search term */
  const [term, setTerm] = useState("");

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
        style={container}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        bounces={false}
      >
        {/* Header */}
        <View style={headerWithSearch}>
          <View style={headerContainer}>
            <HeaderText text="Sarah Tan" />
          </View>

          {/* Search */}
          <SearchBar
            term={term}
            onTermChange={(newTerm) => {
              setTerm(newTerm);
            }}
          />
        </View>

        {/* Content Body */}
        <View style={styles.agentSummaryOverallBox}>
          <View style={styles.agentSummaryBoxRow}>
            <View>
              <View style={styles.agentSummaryBoxTitleBox}>
                <Text style={styles.agentSummaryBoxTitle}>Team & Slack</Text>
                <AntDesign name="infocirlceo" style={styles.infoIcon} />
              </View>
              <Text style={styles.agentSummaryBoxContent}>Orchard Ion</Text>
            </View>
            <View style={styles.verticleLine}></View>
            <View>
              <View style={styles.agentSummaryBoxTitleBox}>
                <Text style={styles.agentSummaryBoxTitle}>
                  Service Duration
                </Text>
                <AntDesign name="infocirlceo" style={styles.infoIcon} />
              </View>
              <Text style={styles.agentSummaryBoxContent}>
                3 years, 8 months
              </Text>
            </View>
          </View>

          <View style={styles.horizontalLine} />

          <View style={styles.agentSummaryBoxRow}>
            <View>
              <View style={styles.agentSummaryBoxTitleBox}>
                <Text style={styles.agentSummaryBoxTitle}>
                  Customers Served
                </Text>
                <AntDesign name="infocirlceo" style={styles.infoIcon} />
              </View>
              <Text style={styles.agentSummaryBoxContent}>4,239</Text>
            </View>
            <View style={styles.verticleLine}></View>
            <View>
              <View style={styles.agentSummaryBoxTitleBox}>
                <Text style={styles.agentSummaryBoxTitle}>Total Sales</Text>
                <AntDesign name="infocirlceo" style={styles.infoIcon} />
              </View>
              <Text style={styles.agentSummaryBoxContent}>S$ 58,384</Text>
            </View>
          </View>
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
              page === "weekly" ? activeSubTabButton : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("weekly");
            }}
          >
            <Text style={subTabText}>Weekly</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              page === "monthly" ? activeSubTabButton : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("monthly");
            }}
          >
            <Text style={subTabText}>Monthly</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              page === "yearly" ? activeSubTabButton : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("yearly");
            }}
          >
            <Text style={subTabText}>Yearly</Text>
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
  agentSummaryOverallBox: {
    height: 250,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  agentSummaryBoxRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: 90,
  },
  agentSummaryBoxTitleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    width: (Dimensions.get("window").width / 2) * 0.85,
  },
  agentSummaryBoxContent: {
    fontSize: 25,
    color: colors.theme,
    width: (Dimensions.get("window").width / 2) * 0.85,
    padding: 5,
  },
  agentSummaryBoxTitle: {
    fontWeight: "bold",
    fontSize: 13,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
  horizontalLine: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: "92%",
    alignSelf: "center",
  },
  infoIcon: {
    fontSize: 15,
    color: colors.theme,
  },
});

export default MeScreen;
