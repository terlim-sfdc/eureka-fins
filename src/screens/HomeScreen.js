import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../../assets/colors/colors";
import axios from "axios";
import { users } from "../../usersConfig";

import AppContext from "../components/AppContext";

import { useFonts } from "expo-font";
import { Surface } from "react-native-paper";

var sharePrice = require("share-price");

// Import components and styles
import HeaderTextWithAvatar from "../components/HeaderTextWithAvatar";
import {
  container,
  headerWithoutSearch,
  headerContainer,
  subTabText,
  activeSubTabButton,
  inactiveSubTabButton,
  summaryOverallBox,
  summaryBoxRow,
  summaryBoxTitleBox,
  summaryBoxContent,
  summaryBoxSubContent,
  summaryBoxTitle,
  horizontalLine,
  verticleLine,
  summaryBoxSubContentContainer,
} from "../styles";

import Commercial from "./SubScreens/Commercial";
import Retail from "./SubScreens/Retail";
import Investment from "./SubScreens/Investment";

const HomeScreen = ({ navigation }) => {
  const currentUserContext = useContext(AppContext);

  const [isLoadingTotalCustomers, setIsLoadingTotalCustomers] = useState(false);

  const [customers, setCustomers] = useState([]);

  // page is retail, commercial, investment
  const [page, setPage] = useState("retail");

  /* Set up state for Stock Price */
  const [stockPrice, setStockPrice] = useState("");

  if (Platform.OS == "ios") {
    StatusBar.setBarStyle("light-content", true);
  }

  {
    /* load custom fonts */
  }
  let [fontsLoaded] = useFonts({
    ProximaNova: require("../../assets/fonts/Proxima-Nova.otf"),
    ProximaNovaBold: require("../../assets/fonts/Proxima-Nova-Bold.otf"),
  });

  const greetingOfTheDay = () => {
    const greeting = "";
    const hourOfDay = new Date().getHours();
    if (hourOfDay >= 18) {
      return "Evening, " + users[currentUserContext.user].firstName;
    } else if (hourOfDay >= 12) {
      return "Afternoon, " + users[currentUserContext.user].firstName;
    } else return "Morning, " + users[currentUserContext.user].firstName;
  };

  const updateSharePrice = (ticker) => {
    //Using a callback function.
    sharePrice.getSharePrice(
      { stockSymbol: ticker },
      function (stockPrice, error) {
        if (error) {
          console.error(error);
        }
        setStockPrice(parseFloat(stockPrice).toFixed(2));
      }
    );
  };

  // calls Mulesoft API to get Total Customers from Database
  const updateTotalCustomers = async () => {
    try {
      setIsLoadingTotalCustomers(true);
      //apiCallHeader contains the authentication using Basic Auth
      const response = await axios.get(
        "http://eureka-fins.sg-s1.cloudhub.io/customers"
      );
      if (response.status === 200) {
        setCustomers(response.data);
        setIsLoadingTotalCustomers(false);
        return;
      } else {
        Alert.alert(
          "Unable to load data... check network connection and reload app."
        );
        throw new Error("Failed to fetch customers from Mulesoft API");
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Customer Data fetching cancelled");
      } else {
        console.log(error);
        setIsLoadingTotalCustomers(false);
      }
    }
  };

  // create zoom meeting
  const createZoomMeeting = async () => {
    var data = JSON.stringify({
      agenda: "Expenses Meeting - Mobile",
      default_password: false,
      duration: 60,
      password: "123456",
      pre_schedule: false,
      start_time: "2022-07-07T08:30:00Z",
      template_id: "Dv4YdINdTk+Z5RToadh5ug==",
      timezone: "Asia/Singapore",
      topic: "Expenses Meeting - Mobile",
      tracking_fields: [
        {
          field: "field1",
          value: "value1",
        },
      ],
      type: 2,
    });

    // https://marketplace.zoom.us/develop/apps/X41hU0PiQ-65DZ5alxCgNA/credentials
    // replace the JWT token with the new one from the site above (developer.zoom.us API), see View JWT Token
    var config = {
      method: "post",
      url: "https://api.zoom.us/v2/users/me/meetings",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6Il9ibHVLNXFsUWZlSTBsdHlmc1VXZmciLCJleHAiOjE2NTc3NzI0MzEsImlhdCI6MTY1NzE2NzYzMX0.yFi9i-MuLSClfXUYdtzuFy08PMEFFExr_ob-uQK_HGg",
        Cookie:
          "TS018dd1ba=01b2081ea5bdf03a45d0a4ef815c45fb0a6cc398cd9937d35b57550befc9bece058d430fe2b6f540711f145e34fe6b13baee27030b; _zm_mtk_guid=35f9d7553a94414d9733e6dc72c3a85e; TS01f92dc5=01b2081ea5bdf03a45d0a4ef815c45fb0a6cc398cd9937d35b57550befc9bece058d430fe2b6f540711f145e34fe6b13baee27030b; cred=044A4501ED82BAC1F279779F624501D2",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    Alert.alert(
      "Expense Meeting Created",
      "Meeting will commence in an hour for 60 mins",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  };

  // https://reactnavigation.org/docs/function-after-focusing-screen/
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // updates the state of Share Price with ticker on screen focus
      updateSharePrice("CRM");
      updateTotalCustomers();
    });
    return unsubscribe;
  }, [navigation]);

  //refreshes every 3 secs and calls updateSharePrice
  const refreshInterval = 3000;
  useEffect(() => {
    const interval = setInterval(() => {
      updateSharePrice("CRM");
    }, refreshInterval);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      // Overall Container Wrapper
      <ScrollView
        style={container}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        bounces={false}
      >
        {/* Header */}
        <View style={headerWithoutSearch}>
          <View style={headerContainer}>
            <HeaderTextWithAvatar
              headerText={greetingOfTheDay()}
              navigation={navigation}
              currentUserContext={currentUserContext}
            />
          </View>
        </View>

        {/* Content Body */}
        <Surface style={[summaryOverallBox, { height: 200 }]}>
          <View style={summaryBoxRow}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  updateTotalCustomers();
                }}
              >
                <View style={summaryBoxTitleBox}>
                  <Text style={summaryBoxTitle}>Total Customers</Text>
                </View>
                <Text style={summaryBoxContent}>
                  {isLoadingTotalCustomers === true ? (
                    <ActivityIndicator
                      size={"small"}
                      style={styles.activityIndicator}
                      color={colors.theme}
                    />
                  ) : (
                    customers.length * 100
                  )}
                </Text>

                {isLoadingTotalCustomers != true && (
                  <View style={summaryBoxSubContentContainer}>
                    <Text
                      style={[summaryBoxSubContent, { color: colors.green }]}
                    >
                      +17
                    </Text>
                    <Text style={summaryBoxSubContent}> from last month</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View style={verticleLine}></View>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Profit per customer</Text>
              </View>
              <Text style={summaryBoxContent}>
                {isLoadingTotalCustomers === true ? (
                  <ActivityIndicator
                    size={"small"}
                    style={styles.activityIndicator}
                    color={colors.theme}
                  />
                ) : (
                  "US$530"
                )}
              </Text>

              {isLoadingTotalCustomers != true && (
                <View style={summaryBoxSubContentContainer}>
                  <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                    +0.35{" "}
                  </Text>
                  <Text style={summaryBoxSubContent}>from last month</Text>
                </View>
              )}
            </View>
          </View>

          {/* <View style={horizontalLine} />

          <View style={summaryBoxRow}>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Revenue</Text>
              </View>
              <Text style={summaryBoxContent}>
                {isLoadingTotalCustomers === true ? (
                  <ActivityIndicator
                    size={"small"}
                    style={styles.activityIndicator}
                    color={colors.theme}
                  />
                ) : (
                  "US$84,028"
                )}
              </Text>
              {isLoadingTotalCustomers != true && (
                <View style={summaryBoxSubContentContainer}>
                  <Text style={[summaryBoxSubContent, { color: colors.green }]}>
                    +5.3{" "}
                  </Text>
                  <Text style={summaryBoxSubContent}>per month</Text>
                </View>
              )}
            </View>
            <View style={verticleLine}></View>
            <View>
              <View style={summaryBoxTitleBox}>
                <Text style={summaryBoxTitle}>Progress to target</Text>
              </View>
              <Text style={summaryBoxContent}>
                {isLoadingTotalCustomers === true ? (
                  <ActivityIndicator
                    size={"small"}
                    style={styles.activityIndicator}
                    color={colors.theme}
                  />
                ) : (
                  "US$58,384"
                )}
              </Text>
              <View style={summaryBoxSubContentContainer}>
                <Text style={summaryBoxSubContent}>+1.2 </Text>
                <Text style={summaryBoxSubContent}>from last month</Text>
              </View>
            </View>
          </View> */}

          <View style={horizontalLine} />

          <View style={summaryBoxRow}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  storeUser();
                }}
              >
                <View style={summaryBoxTitleBox}>
                  <Text style={summaryBoxTitle}>Expenses</Text>
                </View>
                <Text style={summaryBoxContent}>
                  {isLoadingTotalCustomers === true ? (
                    <ActivityIndicator
                      size={"small"}
                      style={styles.activityIndicator}
                      color={colors.theme}
                    />
                  ) : (
                    "US$54,393"
                  )}
                </Text>
                {isLoadingTotalCustomers != true && (
                  <View style={summaryBoxSubContentContainer}>
                    <Text
                      style={[summaryBoxSubContent, { color: colors.orange }]}
                    >
                      +1.2{" "}
                    </Text>
                    <Text style={summaryBoxSubContent}>from last month</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View style={verticleLine}></View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  updateSharePrice("CRM");
                }}
              >
                <View style={summaryBoxTitleBox}>
                  <Text style={summaryBoxTitle}>Stock price</Text>
                </View>
                <Text style={summaryBoxContent}>
                  {isLoadingTotalCustomers === true ? (
                    <ActivityIndicator
                      size={"small"}
                      style={styles.activityIndicator}
                      color={colors.theme}
                    />
                  ) : (
                    "US$" + stockPrice
                  )}
                </Text>
                {isLoadingTotalCustomers != true && (
                  <View style={summaryBoxSubContentContainer}>
                    <Text
                      style={[summaryBoxSubContent, { color: colors.green }]}
                    >
                      Live Price
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </Surface>

        {/* View for Retail, Commercial, Investment tab buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            style={[
              page === "retail" ? activeSubTabButton : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("retail");
            }}
          >
            <Text style={subTabText}>Retail</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              page === "commercial" ? activeSubTabButton : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("commercial");
            }}
          >
            <Text style={subTabText}>Commercial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              page === "investment" ? activeSubTabButton : inactiveSubTabButton,
            ]}
            onPress={() => {
              setPage("investment");
            }}
          >
            <Text style={subTabText}>Investment</Text>
          </TouchableOpacity>
        </View>

        {/* Show page based on button pressed and pass down customer prop */}
        {page === "retail" && (
          <Retail currentUserContext={currentUserContext} />
        )}
        {page === "commercial" && (
          <Commercial currentUserContext={currentUserContext} />
        )}
        {page === "investment" && (
          <Investment currentUserContext={currentUserContext} />
        )}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  activityIndicator: {
    width: (Dimensions.get("window").width / 2) * 0.85,
    height: 60,
    alignContent: "center",
    alignSelf: "center",
  },
});

export default HomeScreen;
