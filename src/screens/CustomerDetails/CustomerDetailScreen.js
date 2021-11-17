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
import Statistics from "./Statistics";
import Recommendations from "./Recommendations";

/* Actual Customer Detail Screen */

const CustomerDetailScreen = ({ route, navigation }) => {
  const { customer } = route.params;
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

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState("recommendations");

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
          <View style={styles.iconTitle}>
            <Ionicons
              name="chevron-back"
              size={32}
              color={colors.white}
              style={styles.icon}
              onPress={() => navigation.goBack()}
              title="Go back"
            />
            <Text style={styles.prevPageLink}>Customers</Text>
          </View>

          <Text style={styles.pageTitle}>{customer.name}</Text>
        </View>

        {/* Content Body */}
        <View style={styles.customerDetailBox}>
          <View style={styles.customerDetailLineItemBox}>
            <AntDesign
              name="mobile1"
              style={styles.customerDetailLineItemIcons}
            />
            <Text style={styles.customerDetailLineItemContent}>
              {customer.phone}
            </Text>
          </View>
          <View style={styles.customerDetailLineItemBox}>
            <Feather name="mail" style={styles.customerDetailLineItemIcons} />
            <Text style={styles.customerDetailLineItemContent}>
              {customer.email}
            </Text>
          </View>
          <View style={styles.customerDetailLineItemBox}>
            <AntDesign name="home" style={styles.customerDetailLineItemIcons} />
            <Text
              style={[
                styles.customerDetailLineItemContent,
                { marginBottom: 5 },
              ]}
            >
              {customer.address}
            </Text>
          </View>

          {/* {Line seperator} */}
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              width: "92%",
              alignSelf: "center",
            }}
          />
          <View style={styles.customerDetailLineItemBox}>
            <AntDesign
              name="mobile1"
              style={styles.customerDetailLineItemIcons}
            />
            <Text style={styles.customerDetailLineItemContent}>
              {customer.membership.toUpperCase()} tier member
            </Text>
          </View>
          <View style={styles.customerDetailLineItemBox}>
            <Feather name="mail" style={styles.customerDetailLineItemIcons} />
            <Text style={styles.customerDetailLineItemContent}>
              Member since {customer.joindate}
            </Text>
          </View>
          <View style={styles.customerDetailLineItemBox}>
            <AntDesign name="home" style={styles.customerDetailLineItemIcons} />
            <Text style={styles.customerDetailLineItemContent}>
              Total spending so far: ${customer.totalspent}
            </Text>
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
              page === "recommendations"
                ? styles.ActiveTabButton
                : styles.InActiveTabButton,
            ]}
            onPress={() => {
              setPage("recommendations");
            }}
          >
            <Text style={styles.TabButtonText}>Recommendations</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              page === "statistics"
                ? styles.ActiveTabButton
                : styles.InActiveTabButton,
            ]}
            onPress={() => {
              setPage("statistics");
            }}
          >
            <Text style={styles.TabButtonText}>Statistics</Text>
          </TouchableOpacity>
        </View>

        {/* Show page based on button pressed and pass down customer prop */}
        {page === "recommendations" && (
          <Recommendations navigate={navigation.navigate} customer={customer} />
        )}
        {page === "statistics" && <Statistics customer />}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
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
    marginTop: 3,
    marginHorizontal: 15,
    color: colors.theme,
  },
  customerDetailLineItemContent: { fontSize: 15 },
  TabButtonText: {
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

export default CustomerDetailScreen;
