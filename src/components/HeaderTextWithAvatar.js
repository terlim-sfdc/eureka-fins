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
          <MenuItem disabled>
            {currentUserObject.firstName + " " + currentUserObject.lastName}
          </MenuItem>
          <MenuDivider />
          {/* // Loops through all users and load them as options */}
          {Object.entries(users).map(([key, userObject]) =>
            currentUserContext.user != key ? (
              <MenuItem
                key={key}
                onPress={() => {
                  hideMenu();
                  currentUserContext.setUser(key);
                }}
              >
                {userObject.firstName + " " + userObject.lastName}
              </MenuItem>
            ) : null
          )}
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
