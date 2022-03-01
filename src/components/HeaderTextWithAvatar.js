import React from "react";
import { Text, View, Image, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";
import profile from "../../assets/images/terence-avatar.jpeg";

const HeaderTextWithAvatar = (props) => {
  return (
    <View style={styles.headerTextContainer}>
      <Text
        style={{
          fontSize: 30,
          color: colors.white,
          fontFamily: "ProximaNovaBold",
        }}
      >
        {props.text}
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ProfileScreen")}
      >
        <Image source={profile} style={styles.profileImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
});

export default HeaderTextWithAvatar;
