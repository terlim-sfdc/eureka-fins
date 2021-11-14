import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  TextInput,
  ScrollView,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";
import { DataTable } from "react-native-paper";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useFonts } from "expo-font";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import HeaderText from "../components/HeaderText";
import { headerContainer } from "../styles";

const HomeScreen = ({ navigation }) => {
  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

  {
    /* load custom fonts */
  }
  let [fontsLoaded] = useFonts({
    Bodoni: require("../../assets/fonts/Bodoni.ttf"),
    "Bodoni-bold": require("../../assets/fonts/Bodoni-bold.ttf"),
  });

  const greetingOfTheDay = () => {
    const greeting = "";
    const hourOfDay = new Date().getHours();
    if (hourOfDay >= 18) {
      return "Good Evening";
    } else if (hourOfDay >= 12) {
      return "Good Afternoon";
    } else return "Good Morning";
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
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
            <HeaderText text={greetingOfTheDay()} />
          </View>

          {/* Search */}
          <View style={styles.search}>
            <Feather name="search" style={styles.searchIconStyle} />
            <TextInput
              placeholder="Search"
              style={styles.searchInputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              defaultValue={"Search"}
            />
          </View>
        </View>

        {/* Content Body */}

        {/* Incentive cards */}
        <View>
          <Image
            style={styles.incentiveCard}
            source={require("../../assets/images/incentivecard.png")}
          />
        </View>

        {/* Dashboard cards */}
        <View style={styles.dashboardCardHeader}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Team Dashboard - This month so far
          </Text>
        </View>
        <View style={styles.dashboardCardItemContainer}>
          <View style={styles.dashboardCardItem}>
            <Text style={styles.customerCardName}>Total Sales Made</Text>
            <View
              style={{
                borderBottomColor: colors.yellow,
                borderBottomWidth: 2,
                width: "92%",
                alignSelf: "center",
              }}
            />
            <View>
              <Text style={styles.dashboardCardDetails}>$35,780</Text>
            </View>
            <View>
              <Text
                style={[
                  styles.dashboardCardSubDetails,
                  { color: colors.green },
                ]}
              >
                +8% from last month
              </Text>
            </View>
          </View>

          <View style={styles.dashboardCardItem}>
            <Text style={styles.customerCardName}>Target Percentage</Text>
            <View
              style={{
                borderBottomColor: colors.yellow,
                borderBottomWidth: 2,
                width: "92%",
                alignSelf: "center",
              }}
            />
            <View>
              <Text style={styles.dashboardCardDetails}>95%</Text>
            </View>
            <View>
              <Text style={[styles.dashboardCardSubDetails]}>
                5% more to go
              </Text>
            </View>
          </View>
        </View>

        {/* Top performers */}
        {/* https://callstack.github.io/react-native-paper/data-table.html */}
        <DataTable style={styles.topPerformersTable}>
          <DataTable.Header>
            <DataTable.Title style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 15,
                  alignContent: "center",
                  fontWeight: "bold",
                  color: colors.black,
                }}
              >
                Top Contributors
              </Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell style={styles.cellOne}>1.</DataTable.Cell>
            <DataTable.Cell style={styles.cellTwo}>Li Xinyi</DataTable.Cell>
            <DataTable.Cell style={styles.cellThree}>$3,430.70</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.cellOne}>2.</DataTable.Cell>
            <DataTable.Cell style={styles.cellTwo}>Sarah Tan</DataTable.Cell>
            <DataTable.Cell style={styles.cellThree}>$3,308.10</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.cellOne}>3.</DataTable.Cell>
            <DataTable.Cell style={styles.cellTwo}>Sam Man</DataTable.Cell>
            <DataTable.Cell style={styles.cellThree}>$308.10</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { height: 177, backgroundColor: colors.theme, padding: 10 },
  pageTitle: {
    // flexDirection: "row",
    // justifyContent: "flex-stat",
    marginTop: 60,
    marginLeft: 10,
  },
  icon: { marginTop: 70, marginHorizontal: 10, color: colors.yellow },
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
  dashboardCardItem: {
    backgroundColor: colors.white,
    padding: 15,
    marginVertical: 8,
    marginLeft: 15,
    height: 165,
    width: 165,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  dashboardCardHeader: {
    justifyContent: "space-between",
    padding: 7,
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 15,
  },
  customerCardName: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "bold",
  },
  incentiveCard: {
    marginTop: 15,
    borderWidth: 0,
    alignSelf: "center",
  },
  dashboardCardItemContainer: {
    flexDirection: "row",
    padding: 6,
  },
  dashboardCardDetails: {
    fontSize: 33,
    alignSelf: "center",
    color: colors.theme,
    fontWeight: "bold",
  },
  dashboardCardSubDetails: {
    fontSize: 12,
    alignSelf: "center",
  },
  topPerformersTable: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: "88%",
    alignSelf: "center",
    marginBottom: 15,
  },
  cellOne: { flex: 1, justifyContent: "center", padding: 10 },
  cellTwo: { flex: 10, justifyContent: "flex-start", padding: 10 },
  cellThree: { flex: 10, justifyContent: "flex-end", padding: 10 },
});

export default HomeScreen;
