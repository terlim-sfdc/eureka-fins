import React from "react";
import { Text, View, Image, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";
import profile from "../../assets/images/tg-avatar.png";
import { prevPageLinkContentBox, prevPageLink } from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const HeaderTextWithoutAvatar = (props) => {
  return (
    <View>
      <View style={prevPageLinkContentBox}>
        <Ionicons
          name="chevron-back"
          size={32}
          color={colors.white}
          title={"Go back"}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={prevPageLink}>{props.prevPageTitle}</Text>
      </View>
      <View style={styles.headerTextContainer}>
        <Text
          style={{
            fontSize: 35,
            color: colors.white,
            fontFamily: "ProximaNovaBold",
            marginLeft: 10,
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HeaderTextWithoutAvatar;
