/*
from udemy
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
*/

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SplashScreen from "expo-splash-screen";

import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Feather, FontAwesome } from "@expo/vector-icons";

import colors from "./assets/colors/colors";

import HomeScreen from "./src/screens/HomeScreen";
import CustomersScreen from "./src/screens/CustomersScreen";
import MeScreen from "./src/screens/MeScreen";
import TestScreen from "./src/screens/TestScreen";
import CustomerDetailScreen from "./src/screens/CustomerDetailScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn); // it's good to explicitly catch and inspect any error

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: styles.tabBar,
        tabBarActiveTintColor: colors.theme,
        tabBarInactiveTintColor: colors.grey,
        tabBarShowLabel: true,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="lightning-bolt-outline"
              size={32}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Customers"
        component={CustomersScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="diamond" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={MeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="star-o" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

class App extends React.Component {
  componentDidMount() {
    // Hides native splash screen after 1s
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 200);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              title: "Eureka Screen",
              headerShown: false,
              headerStyle: {
                backgroundColor: colors.theme,
              },
              headerTitleStyle: { color: "white" },
              headerTintColor: colors.white,
            }}
          />
          <Stack.Screen
            name="TestScreen"
            component={TestScreen}
            options={{
              title: "Test Screen",
              headerShown: true,
              headerStyle: {
                backgroundColor: colors.orange,
              },
              headerTitleStyle: { color: "white" },
              headerTintColor: colors.white,
            }}
          />
          <Stack.Screen
            name="CustomerDetailScreen"
            component={CustomerDetailScreen}
            options={{
              title: "Customer Detail Screen",
              headerShown: false,
              headerStyle: {
                backgroundColor: colors.theme,
              },
              headerTitleStyle: { color: "white" },
              headerTintColor: colors.white,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.theme,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;

/*
This was the way done by udemy
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Test: TestScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "eureka",
    },
  }
);

export default createAppContainer(navigator);

*/
