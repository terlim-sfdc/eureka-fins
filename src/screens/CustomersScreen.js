import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";

import { Surface, useTheme } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { WebView } from "react-native-webview";

import { useFonts } from "expo-font";

// Import components and styles
import {
  container,
  headerWithoutSearch,
  headerContainer,
  subTabText,
  activeSubTabButton,
  inactiveSubTabButton,
  summaryOverallBox,
  summaryBoxRow,
  summaryBoxTitleBox,
  summaryBoxContent,
  summaryBoxSubContent,
  summaryBoxTitle,
  horizontalLine,
  verticleLine,
  sectionSubHeadingBox,
  sectionSubHeadingText,
  summaryBoxSubContentContainer,
} from "../styles";
import HeaderText from "../components/HeaderTextWithAvatar";
import SearchBar from "../components/SearchBar";

/* Actual Customer Detail Screen */

const CustomersScreen = ({ route, navigation }) => {
  /* Set up state for search term */
  const [term, setTerm] = useState("");

  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

  {
    /* load custom fonts */
  }
  let [fontsLoaded] = useFonts({
    ProximaNova: require("../../assets/fonts/Proxima-Nova.otf"),
  });

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
          <View style={headerContainer}>
            <HeaderText text="Customers" navigation={navigation} />
          </View>
        </View>

        {/* Content Body */}
        <Surface style={sectionSubHeadingBox}>
          <Text style={sectionSubHeadingText}>
            Customer Satisfaction Ratings
          </Text>
        </Surface>
        <Surface style={summaryOverallBox}>
          <View style={summaryBoxRow}>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Quality of service</Text>
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
                <Text style={summaryBoxTitle}>Speed of service</Text>
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
                <Text style={summaryBoxTitle}>Pricing</Text>
              </View>
              <Text style={summaryBoxContent}>65/100</Text>
              <View style={summaryBoxSubContentContainer}>
                <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                  +5.3{" "}
                </Text>
                <Text style={summaryBoxSubContent}>from last month</Text>
              </View>
            </View>
            <View style={verticleLine}></View>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Complains/Problems</Text>
              </View>
              <Text style={summaryBoxContent}>439 cases</Text>
              <View style={summaryBoxSubContentContainer}>
                <Text style={[summaryBoxSubContent, { color: colors.orange }]}>
                  +34
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
                <Text style={summaryBoxTitle}>Customer Sentiment</Text>
              </View>
              <Text style={summaryBoxContent}>
                Good{" "}
                <FontAwesome5
                  name="smile"
                  style={{ color: colors.green, fontSize: 20 }}
                />
              </Text>
              <View style={summaryBoxSubContentContainer}>
                <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                  81
                </Text>
                <Text style={summaryBoxSubContent}> out of 100</Text>
              </View>
            </View>
          </View>
        </Surface>

        <Surface style={[sectionSubHeadingBox, { marginVertical: 0.3 }]}>
          <Text style={sectionSubHeadingText}>
            Customer Demographics & Insights
          </Text>
        </Surface>
        <View style={styles.container}>
          <WebView
            scrollEnabled={false}
            source={{
              uri: "https://public.tableau.com/views/10_0SuperstoreSales/Overview?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n",
            }}
            style={styles.webview}
          />
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 600,
  },
  webview: {
    flex: 1,
  },
});

export default CustomersScreen;
