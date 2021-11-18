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

// Import components and styles
import HeaderText from "../components/HeaderText";
import SearchBar from "../components/SearchBar";
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
    <ScrollView stickyHeaderIndices={[0]} bounces={false} style={container}>
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
      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>Your Customers</Text>
        <Text>SEE ALL</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={customersData}
        keyExtractor={(item) => item.id}
        renderItem={(customer) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CustomerDetailScreen", {
                  customer: customer.item,
                })
              }
            >
              <View style={styles.customerItem}>
                <Text style={styles.customerCardName}>
                  {customer.item.name}
                </Text>
                <Text style={styles.customerCardPhone}>
                  {customer.item.phone}
                </Text>
                <Text style={styles.customerCardEmail}>
                  {customer.item.email}
                </Text>
                <Text style={styles.customerCardMemberSince}>
                  Member Since {customer.item.joindate}
                </Text>
                <View style={styles.customerMembershipBox}>
                  {customer.item.membership === "gold" && (
                    <Image
                      source={membershipImage.gold}
                      style={styles.customerCardMembershipTierImage}
                    />
                  )}
                  {customer.item.membership === "silver" && (
                    <Image
                      source={membershipImage.silver}
                      style={styles.customerCardMembershipTierImage}
                    />
                  )}
                  {customer.item.membership === "bronze" && (
                    <Image
                      source={membershipImage.bronze}
                      style={styles.customerCardMembershipTierImage}
                    />
                  )}
                  <Text style={styles.customerCardMembershipTier}>
                    {customer.item.membership}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Trending Now Cards */}
      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>Trending Now</Text>
        <Text>SEE ALL</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={trendingNowData}
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
    </ScrollView>
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
  customerItem: {
    backgroundColor: colors.white,
    padding: 15,
    marginVertical: 8,
    marginLeft: 15,
    height: 152,
    width: 329,
    borderRadius: 10,
    justifyContent: "space-between",
  },

  customerCardName: { fontSize: 25, fontWeight: "bold" },
  customerCardPhone: { fontSize: 15, fontWeight: "bold" },
  customerCardEmail: { fontSize: 15 },
  customerCardMemberSince: { fontSize: 15 },
  customerCardMembershipTier: {
    textTransform: "uppercase",
    padding: 5,
  },
  customerCardMembershipTierImage: {
    width: 25,
    height: 35,
    padding: 5,
  },
  customerMembershipBox: {
    position: "absolute",
    right: 10,
    top: 55,
    flexDirection: "row",
    alignItems: "center",
  },

  trendingNowItemsView: {
    justifyContent: "space-between",
    padding: 5,
    flexDirection: "row",
    marginHorizontal: 7,
    marginTop: 7,
  },
});

export default CustomersScreen;
