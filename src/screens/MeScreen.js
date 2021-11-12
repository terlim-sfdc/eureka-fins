import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  TextInput,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useFonts } from "expo-font";
import { Feather, FontAwesome } from "@expo/vector-icons";

const MeScreen = ({ navigation }) => {
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
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.iconTitle}>
            <FontAwesome
              name="star-o"
              size={32}
              color={colors.white}
              style={styles.icon}
            />
            <Text style={styles.pageTitle}>Sarah Tan</Text>
          </View>

          {/* Search */}
          <View style={styles.search}>
            <Feather name="search" style={styles.searchIconStyle} />
            <TextInput
              placeholder="Search"
              style={styles.searchInputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              defaultValue={"Search"}
            />
          </View>
        </View>

        {/* Content Body */}
        <Text>Customer Content goes here</Text>
        <Button
          onPress={() => navigation.navigate("TestScreen")}
          title="Go to Test Screen"
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { height: 177, backgroundColor: colors.theme, padding: 10 },
  iconTitle: { flexDirection: "row" },
  pageTitle: {
    fontSize: 30,
    color: colors.white,
    justifyContent: "flex-end",
    marginTop: 60,
    fontFamily: "BodoniBold",
  },
  icon: { marginTop: 67, marginHorizontal: 10, color: colors.yellow },
  search: {
    backgroundColor: "#5d4ba3",
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 5,
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 15,
    padding: 7,
    color: colors.white,
  },
  searchIconStyle: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: 15,
    color: colors.white,
  },
});

export default MeScreen;
