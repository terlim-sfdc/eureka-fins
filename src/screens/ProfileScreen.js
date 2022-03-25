import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Pressable,
  FlatList,
  Image,
  ScrollView,
  Touchable,
  Linking,
} from "react-native";
import { Button } from "react-native-ios-kit";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";


// Import components and styles
import HeaderTextWithoutAvatar from "../components/HeaderTextWithoutAvatar";
import {
  container,
  headerWithBackNav,
  headerContainer,
  horizontalLine,
} from "../styles";

import profile from "../../assets/images/terence-avatar.jpeg";
import slackLogo from "../../assets/images/slack-logo.png";

const ProfileScreen = ({ navigation }) => {
  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

  return (
    // Overall Container Wrapper
    <ScrollView stickyHeaderIndices={[0]} bounces={false} style={container}>
      {/* Header */}
      <View style={headerWithBackNav}>
        <View style={headerContainer}>
          <HeaderTextWithoutAvatar
            text="Account Profile"
            navigation={navigation}
            prevPageTitle={"Home"}
          />
        </View>
      </View>

      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        {/* Profile Details */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            borderWidth: 0,
            padding: 10,
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={profile} style={styles.profileImage} />
          </View>
          <View style={{ flex: 2, padding: 5 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Terence Lim
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: colors.theme,
                marginVertical: 5,
                fontWeight: "bold",
              }}
            >
              Chief Information Officer
            </Text>
          </View>
        </View>

        <View style={horizontalLine} />

        {/* Direct Reports  */}

        <View
          style={{
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 15 }}>
            Frequent Contacts:
          </Text>

          {/* Terence User ID */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("slack://user?team=T01GST6QY0G&id=U0275D3JAKD")
            }
          >
            <View style={styles.slackButton}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Ian Douglas</Text>
                <Text>CFO & EVP</Text>
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
                <Text>Message</Text>
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
                <Text style={{ fontWeight: "bold" }}>Sam Man</Text>
                <Text>COO</Text>
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
                <Text>Message</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* JiSoo User ID */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("slack://user?team=T01GST6QY0G&id=U02DFM4NWHL")
            }
          >
            <View style={styles.slackButton}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Ji Soo Kim</Text>
                <Text>SVP, CIO</Text>
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
                <Text>Message</Text>
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
                <Text>Hd. Asset Management</Text>
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
                <Text>Message</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* BPI Mobile App Channel */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("slack://channel?team=T01GST6QY0G&id=C02P32VGN4T")
            }
          >
            <View style={styles.slackButton}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Jawad Mailk</Text>
                <Text>Hd. Consumer (Mass Market)</Text>
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
                <Text>Message</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL("slack://open")}>
            <View style={styles.slackButton}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Wallace Li</Text>
                <Text>Hd. Consumer Banking</Text>
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
                <Text>Message</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Button
          centered
          color={colors.theme}
          style={{
            borderWidth: 1,
            borderColor: colors.theme,
            padding: 10,
            width: "90%",
            alignSelf: "center",
          }}
        >
          Log Out
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileImage: { height: 87, width: 87 },
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

export default ProfileScreen;
