import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";

import { users } from "../../usersConfig";

import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

const HeaderTextWithAvatar = ({ headerText, currentUserContext }) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const currentUserObject = users[currentUserContext.user];

  return (
    <View style={styles.headerTextContainer}>
      <Text
        style={{
          fontSize: 30,
          color: colors.white,
          fontFamily: "ProximaNovaBold",
        }}
      >
        {headerText}
      </Text>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("ProfileScreen")}
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
              <Image
                source={currentUserObject.image}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}
        >
          {/* // current user */}
          <MenuItem
            disabled
            onPress={() => {
              hideMenu();
              currentUserContext.setUser("terence");
            }}
          >
            {currentUserObject.firstName + " " + currentUserObject.lastName}
          </MenuItem>
          <MenuDivider />
          {/* // Loops through all users and load button */}
          {Object.entries(users).map(([key, userObject]) => (
            <MenuItem
              onPress={() => {
                hideMenu();
                currentUserContext.setUser(key);
              }}
            >
              {userObject.firstName + " " + userObject.lastName}
            </MenuItem>
          ))}
          {/* <MenuItem
            onPress={() => {
              hideMenu();
              currentUserContext.setUser("vivek");
            }}
          >
            Vivek Mahapatra
          </MenuItem>
          <MenuItem
            onPress={() => {
              hideMenu();
              currentUserContext.setUser("vijay");
            }}
          >
            Vijay Kadervel
          </MenuItem>
          <MenuItem
            onPress={() => {
              hideMenu();
              currentUserContext.setUser("tom");
            }}
          >
            Tom Merrit
          </MenuItem> */}
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
    marginHorizontal: 10,
  },
});

export default HeaderTextWithAvatar;
