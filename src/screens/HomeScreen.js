import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";
import { DataTable } from "react-native-paper";

import Feather from "react-native-vector-icons/Feather";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

// Import components and styles
import HeaderText from "../components/HeaderText";
import {
  container,
  headerWithSearch,
  headerContainer,
  sectionSubHeadingBox,
  sectionSubHeadingText,
} from "../styles";
import SearchBar from "../components/SearchBar";

const HomeScreen = ({ navigation }) => {
  /* Set up state for search term */
  const [term, setTerm] = useState("");

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
      <ScrollView stickyHeaderIndices={[0]} bounces={false} style={container}>
        {/* Header */}
        <View style={headerWithSearch}>
          <View style={headerContainer}>
            <HeaderText text={greetingOfTheDay()} />
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

        {/* Incentive cards */}
        <View>
          <LinearGradient
            colors={[colors.theme, "#3b5998", "#192f6a"]}
            style={styles.incentiveCard}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="gift"
                style={{ fontSize: 20, color: colors.yellow }}
              />
              <Text style={styles.incentiveCardTitle}>
                Incentive for the month of November
              </Text>
            </View>
            <Text style={styles.incentiveCardContent}>
              With every $5,000 made in sales, get 5% extra bonus commission
            </Text>
          </LinearGradient>
        </View>

        {/* Dashboard cards */}
        <View style={sectionSubHeadingBox}>
          <Text style={sectionSubHeadingText}>
            Team Dashboard - This month so far
          </Text>
        </View>
        <View style={styles.dashboardCardItemContainer}>
          <View style={styles.dashboardCardItem}>
            <Text style={styles.dashboardCardTitle}>Total Sales Made</Text>
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
            <Text style={styles.dashboardCardTitle}>Target Percentage</Text>
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
            <DataTable.Title
              style={{
                flex: 1,
                justifyContent: "center",
                borderBottomColor: colors.yellow,
                borderBottomWidth: 3,
              }}
            >
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
            <DataTable.Cell style={styles.columnOne}>1.</DataTable.Cell>
            <DataTable.Cell style={styles.columnTwo}>Li Xinyi</DataTable.Cell>
            <DataTable.Cell style={styles.columnThree}>
              $3,430.70
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={{ backgroundColor: "#CBC3E3" }}>
            <DataTable.Cell style={styles.columnOne}>2.</DataTable.Cell>
            <DataTable.Cell style={styles.columnTwo}>Sarah Tan</DataTable.Cell>
            <DataTable.Cell style={styles.columnThree}>
              $3,308.10
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.columnOne}>3.</DataTable.Cell>
            <DataTable.Cell style={styles.columnTwo}>Sam Man</DataTable.Cell>
            <DataTable.Cell style={styles.columnThree}>
              $2,908.10
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.columnOne}>4.</DataTable.Cell>
            <DataTable.Cell style={styles.columnTwo}>Ji Soo Kim</DataTable.Cell>
            <DataTable.Cell style={styles.columnThree}>
              $2,108.10
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={styles.columnOne}>5.</DataTable.Cell>
            <DataTable.Cell style={styles.columnTwo}>
              Tan Kah Kee
            </DataTable.Cell>
            <DataTable.Cell style={styles.columnThree}>
              $2,008.10
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {},
  pageTitle: {
    // flexDirection: "row",
    // justifyContent: "flex-stat",
    marginTop: 60,
    marginLeft: 10,
  },
  icon: { marginTop: 70, marginHorizontal: 10, color: colors.yellow },

  dashboardCardItem: {
    backgroundColor: colors.white,
    padding: 15,
    height: (Dimensions.get("window").width / 2) * 0.85,
    width: (Dimensions.get("window").width / 2) * 0.85,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },

  dashboardCardTitle: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "bold",
  },

  dashboardCardItemContainer: {
    flexDirection: "row",
    padding: 15,
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
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
    width: "90%",
    alignSelf: "center",
    marginBottom: 15,
  },
  columnOne: { flex: 1, justifyContent: "center", padding: 10 },
  columnTwo: { flex: 10, justifyContent: "flex-start", padding: 10 },
  columnThree: { flex: 10, justifyContent: "flex-end", padding: 10 },
  incentiveCard: {
    borderRadius: 10,
    padding: 10,
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  incentiveCardTitle: {
    fontSize: 15,
    padding: 5,
    color: colors.white,
  },
  incentiveCardContent: {
    fontSize: 20,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
    padding: 10,
    color: colors.white,
  },
});

export default HomeScreen;
