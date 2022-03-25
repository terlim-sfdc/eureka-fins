import React, { useState, useEffect } from "react";
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
import axios from "axios";

import { useFonts } from "expo-font";
import { Surface } from "react-native-paper";

var sharePrice = require("share-price");

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

import Commercial from "./SubScreens/Commercial";
import Retail from "./SubScreens/Retail";
import Investment from "./SubScreens/Investment";

const HomeScreen = ({ navigation }) => {
  /* Set up state for search term */
  const [term, setTerm] = useState("");

  const [isLoadingTotalCustomers, setIsLoadingTotalCustomers] = useState(false);

  const [customers, setCustomers] = useState([]);

  // page is retail, commercial, investment
  const [page, setPage] = useState("retail");

  /* Set up state for Stock Price */
  const [stockPrice, setStockPrice] = useState("");

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

  const updateSharePrice = (ticker) => {
    //Using a callback function.
    sharePrice.getSharePrice(
      { stockSymbol: ticker },
      function (stockPrice, error) {
        if (error) {
          console.error(error);
        }
        setStockPrice(parseFloat(stockPrice).toFixed(2));
      }
    );
  };

  // calls Mulesoft API to get Total Customers from Database
  const updateTotalCustomers = async () => {
    try {
      setIsLoadingTotalCustomers(true);
      //apiCallHeader contains the authentication using Basic Auth
      const response = await axios.get(
        "http://eureka-fins.sg-s1.cloudhub.io/customers"
      );
      if (response.status === 200) {
        setCustomers(response.data);
        setIsLoadingTotalCustomers(false);
        return;
      } else {
        throw new Error("Failed to fetch customers from Mulesoft API");
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Customer Data fetching cancelled");
      } else {
        console.log(error);
        setIsLoadingTotalCustomers(false);
      }
    }
  };

  // https://reactnavigation.org/docs/function-after-focusing-screen/
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // updates the state of Share Price with ticker on screen focus
      updateSharePrice("CRM");
      updateTotalCustomers();
    });
    return unsubscribe;
  }, [navigation]);

  // refreshes every 3 secs and calls updateSharePrice
  const refreshInterval = 3000;
  useEffect(() => {
    const interval = setInterval(() => {
      updateSharePrice("CRM");
    }, refreshInterval);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

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
              <Text style={summaryBoxContent}>
                {isLoadingTotalCustomers === true
                  ? "Loading..."
                  : customers.length}
              </Text>
              <View style={summaryBoxSubContentContainer}>
                <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                  +17{" "}
                </Text>
                <Text style={summaryBoxSubContent}>from last month</Text>
              </View>
            </View>
            <View style={verticleLine}></View>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Profit per customer</Text>
              </View>
              <Text style={summaryBoxContent}>US$530</Text>

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
              <Text style={summaryBoxContent}>US$84,028</Text>

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
                {/* <Text style={summaryBoxSubContent}>+1.2 </Text>
                <Text style={summaryBoxSubContent}>from last month</Text> */}
              </View>
            </View>
          </View>

          <View style={horizontalLine} />

          <View style={summaryBoxRow}>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Expenses</Text>
              </View>
              <Text style={summaryBoxContent}>US$54,393</Text>
              <View style={summaryBoxSubContentContainer}>
                <Text style={[summaryBoxSubContent, { color: colors.orange }]}>
                  +1.2{" "}
                </Text>
                <Text style={summaryBoxSubContent}>from last month</Text>
              </View>
            </View>
            <View style={verticleLine}></View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  updateSharePrice("CRM");
                }}
              >
                <View style={summaryBoxTitleBox}>
                  <Text style={summaryBoxTitle}>Stock price</Text>
                </View>
                <Text style={summaryBoxContent}>US${stockPrice}</Text>
                <View style={summaryBoxSubContentContainer}>
                  <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                    Live Price{" "}
                  </Text>
                </View>
              </TouchableOpacity>
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
