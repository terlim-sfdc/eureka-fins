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

// moment library to manage time
const moment = require("moment");

// JWT library to sign token
const sign = require("jwt-encode");

// import variables from tableauConfig.js
import {
  connectedAppSecretId,
  connectedAppClientId,
  connectedAppSecretKey,
  username,
  tableauservername,
  js_api,
  uuidData,
} from "../../tableauConfig";

// Customers Dashboard URL
const customer_dashboard_url =
  tableauservername + "/t/gsisg/views/Superstore/Customers";

// setting up JWT details and signing token
const payload = {
  iss: connectedAppClientId,
  exp: moment.utc().add(10, "minutes").unix(), //exp: 1647244533,
  jti: uuidData,
  aud: "tableau",
  sub: username,
  scp: ["tableau:views:embed"],
};
const headers = {
  kid: connectedAppSecretId,
  iss: connectedAppClientId,
};

const jwtSignToken = sign(payload, connectedAppSecretKey, headers);

let htmlCode =
  "<html><head>" +
  "<title>Welcome to Eureka Tableau Embeeded Integration Demo</title>" +
  '<script type="module" src="https://embedding.tableauusercontent.com/tableau.embedding.3.0.0.min.js"></script>' +
  `<body><tableau-viz id="tableauViz" src=${customer_dashboard_url} toolbar="false" iframeSizedToWindow="true" token="${jwtSignToken}"></tableau-viz></body>` +
  "</head></html>";

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
            scrollEnabled={true}
            originWhitelist={["*"]}
            source={{
              html: htmlCode,
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
    height: 350,
  },
  webview: {
    flex: 1,
  },
});

export default CustomersScreen;
