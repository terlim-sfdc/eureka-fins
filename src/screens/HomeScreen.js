import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";

import { useFonts } from "expo-font";
import { Surface } from "react-native-paper";

// Import components and styles
import HeaderText from "../components/HeaderTextWithAvatar";
import {
  container,
  headerWithoutSearch,
  headerContainer,
  subTabText,
  activeSubTabButton,
  inactiveSubTabButton,
  summaryOverallBox,
  summaryBoxRow,
  summaryBoxTitleBox,
  summaryBoxContent,
  summaryBoxSubContent,
  summaryBoxTitle,
  horizontalLine,
  verticleLine,
  summaryBoxSubContentContainer,
} from "../styles";

import Commercial from "./SubViews/Commercial";
import Retail from "./SubViews/Retail";
import Investment from "./SubViews/Investment";

const HomeScreen = ({ navigation }) => {
  /* Set up state for search term */
  const [term, setTerm] = useState("");

  // page is retail, commercial, investment
  const [page, setPage] = useState("retail");

  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

  {
    /* load custom fonts */
  }
  let [fontsLoaded] = useFonts({
    ProximaNova: require("../../assets/fonts/Proxima-Nova.otf"),
    ProximaNovaBold: require("../../assets/fonts/Proxima-Nova-Bold.otf"),
  });

  const greetingOfTheDay = () => {
    const greeting = "";
    const hourOfDay = new Date().getHours();
    if (hourOfDay >= 18) {
      return "Evening, Terence";
    } else if (hourOfDay >= 12) {
      return "Afternoon, Terence";
    } else return "Morning, Terence";
  };

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
        <View style={headerWithoutSearch}>
          <View style={headerContainer}>
            <HeaderText text={greetingOfTheDay()} navigation={navigation} />
          </View>
        </View>

        {/* Content Body */}
        <Surface style={summaryOverallBox}>
          <View style={summaryBoxRow}>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Total Customers</Text>
              </View>
              <Text style={summaryBoxContent}>395,205</Text>
              <View style={summaryBoxSubContentContainer}>
                <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                  +183{" "}
                </Text>
                <Text style={summaryBoxSubContent}>from last month</Text>
              </View>
            </View>
            <View style={verticleLine}></View>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Profit per customer</Text>
              </View>
              <Text style={summaryBoxContent}>1,500</Text>

              <View style={summaryBoxSubContentContainer}>
                <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                  +0.35{" "}
                </Text>
                <Text style={summaryBoxSubContent}>from last month</Text>
              </View>
            </View>
          </View>

          <View style={horizontalLine} />

          <View style={summaryBoxRow}>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Revenue</Text>
              </View>
              <Text style={summaryBoxContent}>84,028,384</Text>

              <View style={summaryBoxSubContentContainer}>
                <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                  +5.3{" "}
                </Text>
                <Text style={summaryBoxSubContent}>per month</Text>
              </View>
            </View>
            <View style={verticleLine}></View>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Progress to target</Text>
              </View>
              <Text style={summaryBoxContent}>US$58,384</Text>
              <View style={summaryBoxSubContentContainer}>
                <Text style={summaryBoxSubContent}>+1.2 </Text>
                <Text style={summaryBoxSubContent}>from last month</Text>
              </View>
            </View>
          </View>

          <View style={horizontalLine} />

          <View style={summaryBoxRow}>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Expenses</Text>
              </View>
              <Text style={summaryBoxContent}>54,393,492</Text>
              <View style={summaryBoxSubContentContainer}>
                <Text style={[summaryBoxSubContent, { color: colors.orange }]}>
                  +1.2{" "}
                </Text>
                <Text style={summaryBoxSubContent}>from last month</Text>
              </View>
            </View>
            <View style={verticleLine}></View>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Stock price</Text>
              </View>
              <Text style={summaryBoxContent}>US$34.65</Text>
              <View style={summaryBoxSubContentContainer}>
                <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                  +10.5{" "}
                </Text>
              </View>
            </View>
          </View>
        </Surface>

        {/* View for Retail, Commercial, Investment tab buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            style={[
              page === "retail" ? activeSubTabButton : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("retail");
            }}
          >
            <Text style={subTabText}>Retail</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              page === "commercial" ? activeSubTabButton : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("commercial");
            }}
          >
            <Text style={subTabText}>Commercial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              page === "investment" ? activeSubTabButton : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("investment");
            }}
          >
            <Text style={subTabText}>Investment</Text>
          </TouchableOpacity>
        </View>

        {/* Show page based on button pressed and pass down customer prop */}
        {page === "retail" && <Retail />}
        {page === "commercial" && <Commercial />}
        {page === "investment" && <Investment />}
      </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
