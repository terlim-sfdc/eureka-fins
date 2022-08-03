import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";
import { useFonts } from "expo-font";
import { Button } from "react-native-paper";

import { TextInput } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";

import slackLogo from "../../assets/images/slack-logo.png";
import eurekaFinsMap from "../../assets/images/eureka_fins_map.png";
import AppContext from "../components/AppContext";

// Import components and styles
import { container, headerWithoutSearch, headerContainer } from "../styles";
import HeaderTextWithAvatar from "../components/HeaderTextWithAvatar";

import axios from "axios";

// replace axiosConfig.sample with axiosConfig.js with your authentication hash and API URL
import { apiURL, apiCallHeader, encryptedAuth } from "../../axiosConfig";

/* All of the functions here are only relevant for Salesforce Solution Engineers
   who use this app for demo purposes. 
 */

const AboutScreen = ({ route, navigation }) => {
  const currentUserContext = useContext(AppContext);

  const [dashboardURLTextbox, setDashboardURLTextbox] = useState("");
  const [nameTextbox, setNameTextbox] = useState("");
  const [customerTextbox, setCustomerTextbox] = useState("");

  // validates if a URL is correct, for hot switching of Tableau visualizations
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  // logs hot switching requests of tableau viz to postgres
  const logRequestOnPostgres = () => {
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      name: nameTextbox,
      customer: customerTextbox,
      vizurl: dashboardURLTextbox,
    });
    var config = {
      method: "post",
      url: apiURL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: encryptedAuth,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // submit change request to hot switch to a custom tableau visualization in retail tab on home screen
  const submitChangeRequest = async () => {
    try {
      if (nameTextbox == "") {
        console.log(nameTextbox);
        Alert.alert("Please enter your name");
      } else if (customerTextbox == "") {
        console.log(customerTextbox);
        Alert.alert("Please enter a valid customer name");
      } else if (
        !isValidUrl(dashboardURLTextbox) ||
        !dashboardURLTextbox.includes("tableau")
      ) {
        console.log(dashboardURLTextbox);
        Alert.alert("Please enter a valid Tableau Dashboard URL");
      } else {
        // all fields are checked and filled correctly
        await AsyncStorage.setItem("dashboardURL", dashboardURLTextbox);
        await AsyncStorage.setItem("customer", customerTextbox);
        await AsyncStorage.setItem("name", nameTextbox);
        logRequestOnPostgres();
        Alert.alert(
          "Change request accepted: Dashboard for Home Screen Retail Tab View updated"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if user has submitted a hot switch of tableau visualiation before, loads the data from phone
  const loadStoredData = async () => {
    try {
      // only show name of SE/user when app is restarted
      const loadedDashboardURL = await AsyncStorage.getItem("dashboardURL");
      const loadedName = await AsyncStorage.getItem("name");
      const loadedcustomerName = await AsyncStorage.getItem("customer");
      // setDashboardURLTextbox(loadedDashboardURL);
      // setCustomerTextbox(loadedcustomerName);
      setNameTextbox(loadedName);
    } catch (error) {
      console.log(error);
    }
  };

  // this function is called when user clicks on button to restore default tableau visualization
  // default tableau viz is set here
  const restoreDefaultDashboardURL = async () => {
    try {
      setDashboardURLTextbox(
        "https://demo.tableau.com/#/site/customapp/views/headcount/Headcount"
      );

      await AsyncStorage.setItem(
        "dashboardURL",
        "https://demo.tableau.com/#/site/customapp/views/headcount/Headcount"
      );
      Alert.alert("Dashboard for Home Screen Retail tab restored to default");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadStoredData();
  }, []);

  let { screenWidth, screenHeight } = Dimensions.get("window");

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
              headerText="About"
              navigation={navigation}
              currentUserContext={currentUserContext}
            />
          </View>
        </View>

        {/* Content Body */}
        <View style={styles.infoBackground}>
          <Text style={styles.title}>About Eureka FINS</Text>
          <Text style={styles.content}>
            This app (Eureka Fins) is built using React Native, showcasing the
            flexibility of using pro-code and open source tools such as
            Javascript to build a custom native mobile app, combining the power
            of the Salesforce Platform and multi-cloud to create an amazing
            Customer 360 experience.
          </Text>

          <Image
            source={eurekaFinsMap}
            style={{
              height: 492,
              width: 349,
              alignSelf: "center",
              overflow: "visible",
              marginBottom: 35,
            }}
          ></Image>

          <Text style={styles.title}>App Data</Text>
          <Text style={styles.content}>
            Conceptually, the data displayed within the app comes from API built
            using Mulesoft, which could potentially be residing on 3rd party
            systems or Salesforce, or even Heroku! The integrated dashboards are
            authenticated Tableau Embedded dashboards, which can show different
            content based on the user's profile.
          </Text>

          <Text style={{ marginBottom: 5 }}>
            For demo purposes, you may change the embeded Tableau viz dashboard
            on the Home Screen (Retail Tab) via this form:
          </Text>

          <TextInput
            label="Your Name (SE/AE)"
            onChangeText={setNameTextbox}
            value={nameTextbox}
            autoCorrect={false}
            autoCapitalize={"words"}
            mode="outlined"
            style={styles.input}
          />

          <TextInput
            label="Which customer are you demoing this for?"
            onChangeText={setCustomerTextbox}
            value={customerTextbox}
            autoCorrect={false}
            autoCapitalize={"words"}
            mode="outlined"
            style={styles.input}
          />

          <TextInput
            label="Tableau Viz Dashboard URL"
            onChangeText={setDashboardURLTextbox}
            value={dashboardURLTextbox}
            autoCorrect={false}
            autoCapitalize={"none"}
            mode="outlined"
            style={styles.input}
          />

          <Button
            mode="contained"
            style={styles.updateURLButton}
            onPress={() => submitChangeRequest()}
          >
            Submit change request
          </Button>
          <Button
            mode="contained"
            style={[
              styles.updateURLButton,
              { marginBottom: 25, color: "#000000" },
            ]}
            onPress={() => restoreDefaultDashboardURL()}
          >
            Restore Default Dashboard URL
          </Button>

          <Text style={styles.title}>Connect with the Eureka Team</Text>

          {/* Eureka Mobile Request Channel */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("slack://channel?team=T01GST6QY0G&id=C033D7XT4RG")
            }
          >
            <View style={styles.slackButton}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  #eureka-mobile-request
                </Text>
                <Text>Join our slack channel!</Text>
              </View>
              <View
                style={{
                  padding: 3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={slackLogo}
                  style={{ height: 20, width: 20, marginHorizontal: 5 }}
                ></Image>
                <Text>Slack Channel</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Terence User ID */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("slack://user?team=T01GST6QY0G&id=U0275D3JAKD")
            }
          >
            <View style={styles.slackButton}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Terence Lim</Text>
                <Text>Developer Evangelist</Text>
              </View>
              <View
                style={{
                  padding: 3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={slackLogo}
                  style={{ height: 20, width: 20, marginHorizontal: 5 }}
                ></Image>
                <Text>Slack Message</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Jisoo User ID */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("slack://user?team=T01GST6QY0G&id=U02DFM4NWHL")
            }
          >
            <View style={styles.slackButton}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Ji Soo Kim</Text>
                <Text>Senior Visual Designer</Text>
              </View>
              <View
                style={{
                  padding: 3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={slackLogo}
                  style={{ height: 20, width: 20, marginHorizontal: 5 }}
                ></Image>
                <Text>Slack Message</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Ian Douglas User ID */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("slack://user?team=T01GST6QY0G&id=U01GM42APC1")
            }
          >
            <View style={styles.slackButton}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Ian Douglas</Text>
                <Text>Director</Text>
              </View>
              <View
                style={{
                  padding: 3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={slackLogo}
                  style={{ height: 20, width: 20, marginHorizontal: 5 }}
                ></Image>
                <Text>Slack Message</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Vivek User ID */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("slack://user?team=T01GST6QY0G&id=U01FT7G6NKZ")
            }
          >
            <View style={styles.slackButton}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Vivek Mahapatra</Text>
                <Text>Regional VP</Text>
              </View>
              <View
                style={{
                  padding: 3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={slackLogo}
                  style={{ height: 20, width: 20, marginHorizontal: 5 }}
                ></Image>
                <Text>Slack Message</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  infoBackground: {
    backgroundColor: colors.white,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 15,
    marginBottom: 20,
  },
  links: {
    fontSize: 15,
  },
  slackButton: {
    borderWidth: 1,
    borderRadius: 15,
    height: 56,
    borderColor: colors.gray,
    padding: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  updateURLButton: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    margin: 5,
  },
  input: {
    height: 50,
    margin: 2,
    borderWidth: 0,
    padding: 1,
  },
});

export default AboutScreen;
