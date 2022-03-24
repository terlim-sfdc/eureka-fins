import React, { useEffect } from "react";
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
  username,
  tableauservername,
  js_api,
  uuidData,
} from "../../../tableauConfig";

// Customers Dashboard URL
// const customer_dashboard_url =
//   tableauservername + "/t/gsisg/views/Superstore/Product";

const customer_dashboard_url =
  "https://10az.online.tableau.com/t/gsisg/views/Customers/Customers";

// setting up JWT details and signing token
const payload = {
  iss: connectedAppClientId,
  exp: moment.utc().add(3, "minutes").unix(), //exp: 1647244533,
  jti: uuidData,
  aud: "tableau",
  sub: username,
  scp: ["tableau:views:embed"],
};
const headers = {
  kid: connectedAppSecretId,
  iss: connectedAppClientId,
};

const jwtSignToken = sign(payload, connectedAppSecretKey, headers);

let htmlCode =
  "<html><head>" +
  "<title>Welcome to Eureka Tableau Embeeded Integration Demo</title>" +
  '<script type="module" src="https://embedding.tableauusercontent.com/tableau.embedding.3.0.0.min.js"></script>' +
  `<body><tableau-viz id="tableauViz" src=${customer_dashboard_url} toolbar="false" iframeSizedToWindow="true" token="${jwtSignToken}"></tableau-viz></body>` +
  "</head></html>";

const Retail = (props) => {
  console.log(jwtSignToken);
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{
          html: htmlCode,
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
