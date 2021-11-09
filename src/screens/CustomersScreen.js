import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CustomersScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Customers Screen</Text>
      <Button
        onPress={() => navigation.navigate("TestScreen")}
        title="Go to Test Screen"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomersScreen;
