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

import { Surface, useTheme } from "react-native-paper";

// Import components and styles
import HeaderText from "../components/HeaderTextWithAvatar";
import SearchBar from "../components/SearchBar";
import TrendingNowCards from "../components/TrendingNowCards";
import {
  container,
  headerWithoutSearch,
  headerContainer,
  sectionSubHeadingBox,
  sectionSubHeadingText,
  summaryOverallBox,
  summaryBoxRow,
  summaryBoxTitleBox,
  summaryBoxContent,
  summaryBoxSubContent,
  summaryBoxTitle,
  summaryBoxSubContentContainer,
  verticleLine,
  horizontalLine,
} from "../styles";
import { color } from "react-native-reanimated";

const CustomersScreen = ({ navigation }) => {
  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

  return (
    // Overall Container Wrapper
    <ScrollView stickyHeaderIndices={[0]} bounces={false} style={container}>
      {/* Header */}
      <View style={headerWithoutSearch}>
        <View style={headerContainer}>
          <HeaderText text="Trends" navigation={navigation} />
        </View>
      </View>

      {/* Content Body */}

      {/* Customer Trends */}
      <Surface
        style={[sectionSubHeadingBox, { backgroundColor: colors.background }]}
      >
        <Text style={sectionSubHeadingText}>Customer Trends</Text>
      </Surface>
      <Surface style={([summaryOverallBox], { justifyContent: "flex-start" })}>
        <View style={styles.trendItemBox}>
          <Text style={styles.trendItemMainText}>Online Shopping</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.trendItemSubText, { color: colors.green }]}>
              +70%
            </Text>
            <Text style={styles.trendItemSubText}> in transactions</Text>
          </View>
        </View>

        <View style={horizontalLine} />

        <View style={styles.trendItemBox}>
          <Text style={styles.trendItemMainText}>Stock Investments</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.trendItemSubText, { color: colors.green }]}>
              +58%
            </Text>
            <Text style={styles.trendItemSubText}> in transactions</Text>
          </View>
        </View>
        <View style={horizontalLine} />

        <View style={styles.trendItemBox}>
          <Text style={styles.trendItemMainText}>Mobile Banking</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.trendItemSubText, { color: colors.green }]}>
              +31%
            </Text>
            <Text style={styles.trendItemSubText}> in transactions</Text>
          </View>
        </View>
        <View style={horizontalLine} />

        <View style={styles.trendItemBox}>
          <Text style={styles.trendItemMainText}>ATM Usage</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.trendItemSubText, { color: colors.red }]}>
              -51%
            </Text>
            <Text style={styles.trendItemSubText}> in transactions</Text>
          </View>
        </View>
      </Surface>

      {/* Product Trends */}
      <Surface
        style={[sectionSubHeadingBox, { backgroundColor: colors.background }]}
      >
        <Text style={sectionSubHeadingText}>Product Trends</Text>
      </Surface>
      <Surface style={([summaryOverallBox], { justifyContent: "flex-start" })}>
        <View style={styles.trendItemBox}>
          <Text style={styles.trendItemMainText}>International Debit</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.trendItemSubText, { color: colors.green }]}>
              +60%
            </Text>
            <Text style={styles.trendItemSubText}> in sales</Text>
          </View>
        </View>

        <View style={horizontalLine} />

        <View style={styles.trendItemBox}>
          <Text style={styles.trendItemMainText}>Savings Accounts</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.trendItemSubText, { color: colors.green }]}>
              +43%
            </Text>
            <Text style={styles.trendItemSubText}> in sales</Text>
          </View>
        </View>
        <View style={horizontalLine} />

        <View style={styles.trendItemBox}>
          <Text style={styles.trendItemMainText}>Family Planning</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.trendItemSubText, { color: colors.green }]}>
              +22%
            </Text>
            <Text style={styles.trendItemSubText}> in sales</Text>
          </View>
        </View>
        <View style={horizontalLine} />

        <View style={styles.trendItemBox}>
          <Text style={styles.trendItemMainText}>Travel Insurance</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.trendItemSubText, { color: colors.green }]}>
              +17%
            </Text>
            <Text style={styles.trendItemSubText}> in sales</Text>
          </View>
        </View>
      </Surface>

      {/* Market Trends */}
      <Surface
        style={[sectionSubHeadingBox, { backgroundColor: colors.background }]}
      >
        <Text style={sectionSubHeadingText}>Market Trends</Text>
      </Surface>
      <Surface style={([summaryOverallBox], { justifyContent: "flex-start" })}>
        <View style={styles.trendItemBox}>
          <Text>Housing boom is here to stay and the young adults...</Text>
        </View>

        <View style={horizontalLine} />

        <View style={styles.trendItemBox}>
          <Text>Inflation on goods likely to continue in early 2022 as...</Text>
        </View>

        <View style={horizontalLine} />

        <View style={styles.trendItemBox}>
          <Text>Small to medium business owners outlook still gloomy...</Text>
        </View>

        <View style={horizontalLine} />

        <View style={styles.trendItemBox}>
          <Text>Mass return to office being planned very carefully by...</Text>
        </View>
      </Surface>

      {/* Employee Trends */}
      <Surface
        style={[sectionSubHeadingBox, { backgroundColor: colors.background }]}
      >
        <Text style={sectionSubHeadingText}>Employee Trends</Text>
      </Surface>
      <Surface style={summaryOverallBox}>
        <View style={summaryBoxRow}>
          <View>
            <View style={summaryBoxTitleBox}>
              <Text style={summaryBoxTitle}>Job Satisfaction</Text>
            </View>
            <Text style={summaryBoxContent}>83/100</Text>

            <View style={summaryBoxSubContentContainer}>
              <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                +183
              </Text>
              <Text style={summaryBoxSubContent}> from last month</Text>
            </View>
          </View>
          <View style={verticleLine}></View>
          <View>
            <View style={summaryBoxTitleBox}>
              <Text style={summaryBoxTitle}>Retention Rate</Text>
            </View>
            <Text style={summaryBoxContent}>60/100</Text>
            <View style={summaryBoxSubContentContainer}>
              <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                +5{" "}
              </Text>
              <Text style={summaryBoxSubContent}>from last month</Text>
            </View>
          </View>
        </View>

        <View style={horizontalLine} />

        <View style={summaryBoxRow}>
          <View>
            <View style={summaryBoxTitleBox}>
              <Text style={summaryBoxTitle}>Total Employee Count</Text>
            </View>
            <Text style={summaryBoxContent}>20,041</Text>
            <View style={summaryBoxSubContentContainer}>
              <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                +30{" "}
              </Text>
              <Text style={summaryBoxSubContent}>from last month</Text>
            </View>
          </View>
          <View style={verticleLine}></View>
          <View>
            <View style={summaryBoxTitleBox}>
              <Text style={summaryBoxTitle}>New Hires</Text>
            </View>
            <Text style={summaryBoxContent}>138</Text>
            <View style={summaryBoxSubContentContainer}>
              <Text style={[summaryBoxSubContent, { color: colors.orange }]}>
                +30
              </Text>
              <Text style={summaryBoxSubContent}> from last month</Text>
            </View>
          </View>
        </View>

        <View style={horizontalLine} />

        <View style={summaryBoxRow}>
          <View>
            <View style={summaryBoxTitleBox}>
              <Text style={summaryBoxTitle}>Trust</Text>
            </View>
            <Text style={summaryBoxContent}>40%</Text>
            <View style={summaryBoxSubContentContainer}>
              <Text style={[summaryBoxSubContent, { color: colors.orange }]}>
                -5%
              </Text>
              <Text style={summaryBoxSubContent}> from last month</Text>
            </View>
          </View>
          <View style={verticleLine}></View>
          <View>
            <View style={summaryBoxTitleBox}>
              <Text style={summaryBoxTitle}>Employee Sentiment</Text>
            </View>
            <Text style={summaryBoxContent}>Good </Text>
            <View style={summaryBoxSubContentContainer}>
              <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                81
              </Text>
              <Text style={summaryBoxSubContent}> out of 100</Text>
            </View>
          </View>
        </View>
      </Surface>
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
  trendItemBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    justifyContent: "space-between",
  },
  trendItemMainText: { fontSize: 15, fontWeight: "bold" },
  trendItemSubText: { fontSize: 13, fontWeight: "bold" },
});

export default CustomersScreen;
