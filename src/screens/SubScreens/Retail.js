import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

// moment library to manage time
const moment = require("moment");

// JWT library to sign token
const sign = require("jwt-encode");

// import variables from tableauConfig.js
import {
  connectedAppSecretId,
  connectedAppClientId,
  connectedAppSecretKey,
  usernameMapping,
  js_api,
  uuidData,
} from "../../../tableauConfig";

const Retail = ({ currentUserContext }) => {
  const [JwtToken, setJwtToken] = useState(undefined);
  const [htmlView, setHtmlView] = useState(undefined);

  const customer_dashboard_url =
    "https://10az.online.tableau.com/t/gsisg/views/Customers/Customers";

  // setting up JWT details and signing token
  const payload = {
    iss: connectedAppClientId,
    exp: moment.utc().add(3, "minutes").unix(), //exp: 1647244533,
    jti: uuidData,
    aud: "tableau",
    // sub: usernameMapping[props.currentUserContext.user],
    sub: "vkadervel@tableau.com",
    scp: ["tableau:views:embed"],
  };
  const headers = {
    kid: connectedAppSecretId,
    iss: connectedAppClientId,
  };
  const updateJwtToken = () => {
    setJwtToken(sign(payload, connectedAppSecretKey, headers));
  };

  // update jwt token when page loads, and when current user is changed
  useEffect(() => {
    updateJwtToken();
  }, [currentUserContext.user]);

  useEffect(() => {
    console.log(JwtToken);
    const htmlCode =
      "<html><head>" +
      "<title>Welcome to Eureka Tableau Embeeded Integration Demo</title>" +
      '<script type="module" src="https://embedding.tableauusercontent.com/tableau.embedding.3.0.0.min.js"></script>' +
      `<body><tableau-viz id="tableauViz" src=${customer_dashboard_url} toolbar="false" iframeSizedToWindow="true" token="${JwtToken}"></tableau-viz></body>` +
      "</head></html>";
    console.log(htmlCode);
    setHtmlView(htmlCode);
  }, [JwtToken]);

  

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{
          html: htmlView,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
  },
  webview: {
    flex: 1,
  },
});
export default Retail;
