import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  TextInput,
  Pressable,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";

import customersData from "../../data/customersData";
import trendingNowData from "../../data/trendingNowData";

import CustomerCards from "../components/CustomerCards";

// Import components and styles
import HeaderText from "../components/HeaderText";
import SearchBar from "../components/SearchBar";
import TrendingNowCards from "../components/TrendingNowCards";
import {
  container,
  headerWithSearch,
  headerContainer,
  sectionSubHeadingBox,
  sectionSubHeadingText,
} from "../styles";

const CustomersScreen = ({ navigation }) => {
  /* Set up state for search term */
  const [term, setTerm] = useState("");

  const filteredCustomerList = customersData.filter(
    (customer) =>
      customer.name.toLowerCase().includes(term.toLowerCase()) ||
      customer.email.toLowerCase().includes(term.toLowerCase())
  );

  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }
  // define the image path for membership tier
  const membershipImage = {
    gold: require("../../assets/images/gold.png"),
    silver: require("../../assets/images/silver.png"),
    bronze: require("../../assets/images/bronze.png"),
  };
  return (
    // Overall Container Wrapper
    <View stickyHeaderIndices={[0]} bounces={false} style={container}>
      {/* Header */}
      <View style={headerWithSearch}>
        <View style={headerContainer}>
          <HeaderText text="Customers" />
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
      <TouchableOpacity
        title="Go to Test Screen here"
        style={styles.addCustomerButton}
      >
        <Text style={styles.addCustomerButtonText}>
          + &nbsp;&nbsp;Add new customer
        </Text>
      </TouchableOpacity>

      {/* Customer Cards */}
      {term == "" && (
        <CustomerCards
          navigate={navigation.navigate}
          customersData={customersData}
          horizontal={true}
        />
      )}

      {/* Customers Cards with search term */}
      {term != "" && (
        <CustomerCards
          navigate={navigation.navigate}
          customersData={filteredCustomerList}
          horizontal={false}
        />
      )}

      {/* Trending Now Cards - shows up only when search term is blank */}
      {term == "" && (
        <TrendingNowCards
          navigate={navigation.navigate}
          trendingNowData={trendingNowData}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addCustomerButton: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 0,
    elevation: 5,
    backgroundColor: "white",
    height: 60,
  },
  addCustomerButtonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

export default CustomersScreen;
