import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";
import { useFonts } from "expo-font";
import { Button } from "react-native-paper";

import slackLogo from "../../assets/images/slack-logo.png";

// Import components and styles
import { container, headerWithoutSearch, headerContainer } from "../styles";
import HeaderTextWithAvatar from "../components/HeaderTextWithAvatar";

/* Actual Customer Detail Screen */

const AboutScreen = ({ route, navigation }) => {
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
            <HeaderTextWithAvatar text="About" navigation={navigation} />
          </View>
        </View>

        {/* Content Body */}
        <View style={styles.infoBackground}>
          <Text style={styles.title}>About Eureka Retail</Text>
          <Text style={styles.content}>
            This app (Eureka Fins) is built using React Native, showcasing the
            flexibility of using pro-code and open source tools such as
            Javascript to build a custom native mobile app, combining the power
            of the Salesforce Platform and multi-cloud to create an amazing
            Customer 360 experience.
          </Text>

          <Text style={styles.title}>App Data</Text>
          <Text style={styles.content}>Work in Progress...</Text>

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
                <Text>Senior Director</Text>
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
});

export default AboutScreen;
