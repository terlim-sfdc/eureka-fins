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
import colors from "../../../assets/colors/colors";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

import { useFonts } from "expo-font";
import Statistics from "./Statistics";
import Recommendations from "./Recommendations";

// import styles and components
import {
  container,
  headerContainer,
  headerWithoutSearch,
  prevPageLinkContentBox,
  subTabText,
  activeSubTabButton,
  inactiveSubTabButton,
  prevPageLink,
} from "../../styles";
import HeaderText from "../../components/HeaderTextWithAvatar";

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
    ProximaNova: require("../../../assets/fonts/Proxima-Nova.otf"),
  });

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState("recommendations");

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
          <View style={prevPageLinkContentBox}>
            <Ionicons
              name="chevron-back"
              size={32}
              color={colors.white}
              title="Go back"
              onPress={() => navigation.goBack()}
            />
            <Text style={prevPageLink}>Customers</Text>
          </View>
          <View style={headerContainer}>
            <HeaderText text={customer.name} />
          </View>
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
            <MaterialIcons
              name="card-membership"
              style={styles.customerDetailLineItemIcons}
            />
            <Text style={styles.customerDetailLineItemContent}>
              {customer.membership.toUpperCase()} tier member
            </Text>
          </View>
          <View style={styles.customerDetailLineItemBox}>
            <MaterialCommunityIcons
              name="account-clock"
              style={styles.customerDetailLineItemIcons}
            />
            <Text style={styles.customerDetailLineItemContent}>
              Member since {customer.joindate}
            </Text>
          </View>
          <View style={styles.customerDetailLineItemBox}>
            <Feather
              name="dollar-sign"
              style={styles.customerDetailLineItemIcons}
            />
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
                ? activeSubTabButton
                : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("recommendations");
            }}
          >
            <Text style={subTabText}>Recommendations</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              page === "statistics" ? activeSubTabButton : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("statistics");
            }}
          >
            <Text style={subTabText}>Statistics</Text>
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
});

export default CustomerDetailScreen;
