import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SplashScreen from "expo-splash-screen";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import colors from "./assets/colors/colors";

import HomeScreen from "./src/Screens/HomeScreen";
import TrendsScreen from "./src/Screens/TrendsScreen";
import CustomersScreen from "./src/Screens/CustomersScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import AboutScreen from "./src/Screens/AboutScreen";

import AppContext from "./src/components/AppContext";
import { defaultUser } from "./usersConfig";

import { useFonts } from "expo-font";

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
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Customers"
        component={CustomersScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Trends"
        component={TrendsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="bar-chart" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="info" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const linking = {
  prefixes: [
    /* your linking prefixes */
  ],
  config: {
    /* configuration for matching screens with paths */
  },
};

const App = () => {
  // Global Variables for User Profile state, loads default user from usersConfig.js file
  const [user, setUser] = useState(defaultUser);

  // This will set the currentUserContext across the screens globally
  const globalUserSettings = {
    user: user,
    setUser: setUser,
  };

  let [fontsLoaded] = useFonts({
    ProximaNova: require("./assets/fonts/Proxima-Nova.otf"),
    ProximaNovaBold: require("./assets/fonts/Proxima-Nova-Bold.otf"),
  });

  useEffect(() => {
    // Hides native splash screen after designated time
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 300);
  }, []);

  return (
    <AppContext.Provider value={globalUserSettings}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{
                title: "Home Screen",
                headerShown: false,
                headerStyle: {
                  backgroundColor: colors.theme,
                },
                headerTitleStyle: { color: "white" },
                headerTintColor: colors.white,
              }}
            />

            <Stack.Screen
              name="ProfileScreen"
              // Default card shows first item
              initialParams={{ itemClicked: 1 }}
              component={ProfileScreen}
              options={{
                title: "Profile Screen",
                headerShown: false,
                headerStyle: {
                  backgroundColor: colors.theme,
                },
                headerTitleStyle: { color: "white" },
                headerTintColor: colors.white,
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.theme,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;
