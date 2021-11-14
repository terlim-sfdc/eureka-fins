import React from "react";
import { Text } from "react-native";
import colors from "../../assets/colors/colors";

const HeaderText = (props) => {
  return (
    <Text
      style={{
        fontSize: 30,
        color: colors.white,
        fontFamily: "Bodoni-bold",
      }}
    >
      {props.text}
    </Text>
  );
};

export default HeaderText;
