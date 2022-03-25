import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";
import terenceProfilePic from "../../assets/images/terence-avatar.jpeg";
import vivekProfilePic from "../../assets/images/vivek-avatar.jpeg";

import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

const HeaderTextWithAvatar = (props) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const getProfilePic = () => {
    switch (props.currentUserContext.user) {
      case "Terence":
        return terenceProfilePic;
        break;
      case "Vivek":
        return vivekProfilePic;
        break;
      default:
        return terenceProfilePic;
    }
  };

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
      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate("ProfileScreen")}
      >
        <Image source={profile} style={styles.profileImage} />
      </TouchableOpacity> */}

      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <Image source={getProfilePic()} style={styles.profileImage} />
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}
        >
          <MenuItem
            onPress={() => {
              hideMenu();
              props.currentUserContext.setUser("Terence");
            }}
          >
            Terence Lim
          </MenuItem>

          {/* <MenuItem disabled>Disabled item</MenuItem>
          <MenuDivider /> */}
          <MenuItem
            onPress={() => {
              hideMenu();
              props.currentUserContext.setUser("Vivek");
            }}
          >
            Vivek Mahapatra
          </MenuItem>
        </Menu>
      </View>
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
