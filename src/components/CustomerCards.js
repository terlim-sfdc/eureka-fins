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

// props: customerData, navigate, horizontal
const CustomerCards = (props) => {
  const membershipImage = {
    gold: require("../../assets/images/gold.png"),
    silver: require("../../assets/images/silver.png"),
    bronze: require("../../assets/images/bronze.png"),
  };
  return (
    <>
      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>Your Customers</Text>
        <Text>SEE ALL</Text>
      </View>

      {/* If no search entries are found using search term */}
      {props.customersData.length == 0 && (
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            marginTop: 50,
            fontSize: 20,
          }}
        >
          No customers found
        </Text>
      )}

      {/* Renders the list of customers */}
      <FlatList
        horizontal={props.horizontal}
        showsHorizontalScrollIndicator={false}
        style={{ alignSelf: "center" }}
        data={props.customersData}
        keyExtractor={(item) => item.id}
        renderItem={(customer) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigate("CustomerDetailScreen", {
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
                  <Text style={styles.customerCardMembershipTier}>
                    {customer.item.membership}
                  </Text>
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
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default CustomerCards;
