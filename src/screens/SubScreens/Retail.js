import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { WebView } from "react-native-webview";
import uuid from "react-native-uuid";
import { users } from "../../../usersConfig";

// moment library to manage time
const moment = require("moment");

// JWT library to sign token
const sign = require("jwt-encode");

// import variables from tableauConfig.js
import {
  connectedAppSecretId,
  connectedAppClientId,
  connectedAppSecretKey,
} from "../../../tableauConfig";

const Retail = ({ currentUserContext }) => {
  const [JwtToken, setJwtToken] = useState(undefined);

  // const customer_dashboard_url =
  //   "https://10az.online.tableau.com/t/gsisg/views/FIN_WM/Askme";

  const customer_dashboard_url =
    "https://10az.online.tableau.com/#/site/gsisg/views/InternalAudit/DepartmentAnalysis";

  // setting up JWT details and signing token
  const payload = {
    iss: connectedAppClientId,
    exp: moment.utc().add(3, "minutes").unix(), //exp: 1647244533,
    jti: uuid.v4(),
    aud: "tableau",
    sub: users[currentUserContext.user].email,
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
  
  // useEffect(() => {
  //   console.log(JwtToken);
  // }, [JwtToken]);

  let htmlCode =
    "<html><head>" +
    "<title>Welcome to Eureka Tableau Embeeded Integration Demo</title>" +
    '<script type="module" src="https://embedding.tableauusercontent.com/tableau.embedding.3.0.0.min.js"></script>' +
    `<body><tableau-viz id="tableauViz" src=${customer_dashboard_url} toolbar="false" token="${JwtToken}" device="phone" height="1100"></tableau-viz></body>` +
    "</head></html>";

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        originWhitelist={["*"]}
        source={{
          // html: htmlCode,
          uri: "https://public.tableau.com/views/10_0SuperstoreSales/Overview?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n",
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
