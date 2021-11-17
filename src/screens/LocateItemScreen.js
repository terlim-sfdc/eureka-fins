import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Button,
} from "react-native";

import colors from "../../assets/colors/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LocateItemScreen = (props) => {
  const { navigation, route } = props;
  const { activeItem } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.titleCloseIconView}>
        <Text style={styles.itemTitle}>{activeItem.title}</Text>

        <AntDesign
          name="closecircleo"
          size={25}
          color={colors.theme}
          style={{ padding: 10 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Image
        source={require("../../assets/images/store-map.png")}
        style={styles.storeMapImage}
      />
      <MaterialIcons name="my-location" style={styles.locationIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: "#FFFFFF",
    flex: 1,
    padding: 0,
  },

  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  titleCloseIconView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  storeMapImage: {
    width: "90%",
    height: "90%",
  },
  locationIcon: {
    position: "absolute",
    fontSize: 50,
    top: 280,
    right: 100,
    color: colors.theme,
  },
});

export default LocateItemScreen;
