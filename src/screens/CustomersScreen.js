import React from "react";
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
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import { useFonts } from "expo-font";

import customersData from "../../data/customersData";
import trendingNowData from "../../data/trendingNowData";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderText from "../components/HeaderText";
import { headerContainer } from "../styles";

const CustomersScreen = ({ navigation }) => {
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
    <ScrollView
      stickyHeaderIndices={[0]}
      bounces={false}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={headerContainer}>
          <HeaderText text="Customers" />
        </View>

        {/* Search */}
        <View style={styles.search}>
          <Feather name="search" style={styles.searchIconStyle} />
          <TextInput
            placeholder="Search"
            style={styles.searchInputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            defaultValue={"Search for customer information, insights"}
          />
        </View>
      </View>

      {/* Content Body */}
      <Pressable
        title="Go to Test Screen here"
        style={styles.addCustomerButton}
      >
        <Text style={styles.addCustomerButtonText}>
          + &nbsp;&nbsp;Add new customer
        </Text>
      </Pressable>

      {/* Customer Cards */}
      <View style={styles.customerCardTitle}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Your Customers</Text>
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
      <View style={styles.trendingNowTitleView}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Trending Now</Text>
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
  container: { flex: 1, backgroundColor: colors.background },
  header: { height: 177, backgroundColor: colors.theme, padding: 10 },
  icon: { marginTop: 70, marginHorizontal: 10, color: colors.yellow },
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
  customerCardTitle: {
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
    marginHorizontal: 7,
    marginTop: 7,
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
  trendingNowTitleView: {
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
    marginHorizontal: 7,
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
