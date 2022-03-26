import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Linking,
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
  usernameMapping,
  js_api,
  uuidData,
} from "../../tableauConfig";

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
import HeaderTextWithAvatar from "../components/HeaderTextWithAvatar";
import AppContext from "../components/AppContext";

/* Customer Detail Screen */

const CustomersScreen = ({ route, navigation }) => {
  const currentUserContext = useContext(AppContext);

  const [JwtToken, setJwtToken] = useState("");

  const customer_dashboard_url =
    "https://10az.online.tableau.com/t/gsisg/views/Superstore/Customers";

  // setting up JWT details and signing token
  const payload = {
    iss: connectedAppClientId,
    exp: moment.utc().add(3, "minutes").unix(), //exp: 1647244533,
    jti: uuidData,
    aud: "tableau",
    sub: usernameMapping[currentUserContext.user],
    scp: ["tableau:views:embed"],
  };
  const headers = {
    kid: connectedAppSecretId,
    iss: connectedAppClientId,
  };
  const updateJwtToken = () => {
    setJwtToken(sign(payload, connectedAppSecretKey, headers));
  };

  // update jwt token when page loads
  useEffect(() => {
    updateJwtToken();
  }, [currentUserContext.user]);

  useEffect(() => {
    console.log(JwtToken);
    const html =
      "<html><head>" +
      "<title>Welcome to Eureka Tableau Embeeded Integration Demo</title>" +
      '<script type="module" src="https://embedding.tableauusercontent.com/tableau.embedding.3.0.0.min.js"></script>' +
      `<body><tableau-viz id="tableauViz" src=${customer_dashboard_url} toolbar="false" iframeSizedToWindow="true" token="${JwtToken}"></tableau-viz></body>` +
      "</head></html>";
  }, [JwtToken]);

  // const htmlCode =
  //   "<html><head>" +
  //   "<title>Welcome to Eureka Tableau Embeeded Integration Demo</title>" +
  //   '<script type="module" src="https://embedding.tableauusercontent.com/tableau.embedding.3.0.0.min.js"></script>' +
  //   `<body><tableau-viz id="tableauViz" src=${customer_dashboard_url} toolbar="false" iframeSizedToWindow="true" token="${JwtToken}"></tableau-viz></body>` +
  //   "</head></html>";

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
            <HeaderTextWithAvatar
              text="Customers"
              navigation={navigation}
              currentUserContext={currentUserContext}
            />
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
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "slack://channel?team=T01GST6QY0G&id=C0380CQDRNU"
                  )
                }
              >
                <View style={summaryBoxTitleBox}>
                  <Text style={summaryBoxTitle}>Quality of service</Text>
                </View>
                <Text style={summaryBoxContent}>73/100</Text>

                <View style={summaryBoxSubContentContainer}>
                  <Text style={[summaryBoxSubContent, { color: colors.red }]}>
                    -18
                  </Text>
                  <Text style={summaryBoxSubContent}> from last month</Text>
                </View>
              </TouchableOpacity>
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
