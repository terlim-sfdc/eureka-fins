import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../assets/colors/colors";

// onTermChange is a callback function prop, to update the state of term in the parent component
const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.search}>
      <Feather name="search" style={styles.searchIconStyle} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.white}
        style={styles.searchInputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        defaultValue={"Search"}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        clearButtonMode="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: "#f41005",
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

export default SearchBar;
