import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import colors from "../../../assets/colors/colors";
import { Surface, useTheme } from "react-native-paper";

const Statistics = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.subtitleContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Spending by categories
        </Text>
      </View>
      <Image
        source={require("../../../assets/images/statistics/DonutChart.png")}
        style={{ alignSelf: "center" }}
      />

      <TouchableOpacity>
        <Surface
          style={[styles.infoCards, { elevation: 4, marginVertical: 20 }]}
        >
          <Text style={{ fontWeight: "bold" }}>
            Reserve & Location Products for Customer
          </Text>
        </Surface>
      </TouchableOpacity>

      <View style={styles.subtitleContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Spending Trend by Month
        </Text>
      </View>
      <Image
        source={require("../../../assets/images/statistics/BarChart.png")}
        style={{ alignSelf: "center" }}
      />

      <View style={styles.subtitleContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Purchase History
        </Text>
      </View>
      <Surface style={[styles.infoCards, { elevation: 1, marginVertical: 5 }]}>
        <Text style={{ fontWeight: "bold" }}>History 1</Text>
      </Surface>

      <Surface style={[styles.infoCards, { elevation: 1, marginVertical: 5 }]}>
        <Text style={{ fontWeight: "bold" }}>History 2</Text>
      </Surface>

      <Surface style={[styles.infoCards, { elevation: 1, marginVertical: 5 }]}>
        <Text style={{ fontWeight: "bold" }}>History 3</Text>
      </Surface>

      <Surface style={[styles.infoCards, { elevation: 1, marginVertical: 5 }]}>
        <Text style={{ fontWeight: "bold" }}>History 4</Text>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, height: "100%" },
  subtitleContainer: {
    justifyContent: "space-between",
    padding: 7,
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  infoCards: {
    margin: 5,
    height: 70,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
});

export default Statistics;
