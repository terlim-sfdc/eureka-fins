import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";
import { TabView, SceneMap } from "react-native-tab-view";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

import { useFonts } from "expo-font";

/* Tab View Code */
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

/* Actual Customer Detail Screen */

const CustomerDetailScreen = ({ route, navigation }) => {
  const { customer } = route.params;
  console.log(navigation);
  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

  {
    /* load custom fonts */
  }
  let [fontsLoaded] = useFonts({
    Bodoni: require("../../assets/fonts/Bodoni.ttf"),
    BodoniBold: require("../../assets/fonts/Bodoni-bold.ttf"),
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      // Overall Container Wrapper
      <ScrollView
        style={styles.container}
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

        <View style={styles.customerDetailBox}>
          {/* Content Body */}
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
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
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
  search: {
    backgroundColor: "#5d4ba3",
    borderRadius: 5,
    marginHorizontal: 15,
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
    marginHorizontal: 15,
    color: colors.white,
  },
  customerDetailBox: {
    height: 252,
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
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});

export default CustomerDetailScreen;
