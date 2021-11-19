import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import colors from "../../../assets/colors/colors";
import { Surface, useTheme } from "react-native-paper";

// import styles and components
import {
  container,
  headerContainer,
  headerWithoutSearch,
  prevPageLinkContentBox,
  sectionSubHeadingBox,
  sectionSubHeadingText,
  subTabText,
  activeSubTabButton,
  inactiveSubTabButton,
  prevPageLink,
  subTabScreenContainer,
  surfaceInfoCards,
} from "../../styles";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const Statistics = (props) => {
  const screenWidth = Dimensions.get("window").width;

  /* Chart information */
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Customer Spending"], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: colors.white,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.white,
    backgroundGradientToOpacity: 0,
    color: (opacity = 100) => `rgba(128, 0, 128, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.7,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={subTabScreenContainer}>
      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>Spending by categories</Text>
      </View>
      <Image
        source={require("../../../assets/images/statistics/DonutChart.png")}
        style={{ alignSelf: "center" }}
      />

      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>Spending Trend by Month</Text>
      </View>

      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />

      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>Purchase History</Text>
      </View>
      <Surface style={[styles.purchaseHistoryCards]}>
        <Text style={styles.historyCardText}>
          5 Nov 2021, 6:00pm - Ion Orchard
        </Text>
        <Text style={styles.historyCardText}>
          Cargo Camo Pants and 2 other items
        </Text>
        <Text style={styles.historyCardText}>Spent $230</Text>
      </Surface>

      <Surface style={[styles.purchaseHistoryCards]}>
        <Text style={styles.historyCardText}>
          4 Nov 2021, 2:00pm - Ion Orchard
        </Text>
        <Text style={styles.historyCardText}>
          Mille Shoes and 4 other items
        </Text>
        <Text style={styles.historyCardText}>Spent $230</Text>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  purchaseHistoryCards: {
    margin: 5,
    height: 120,
    width: "90%",
    padding: 15,
    justifyContent: "space-between",
    elevation: 3,
    alignSelf: "center",
  },
  historyCardText: {
    fontSize: 15,
  },
});

export default Statistics;
