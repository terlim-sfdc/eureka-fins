import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

import { Surface } from "react-native-paper";

import {
  sectionSubHeadingBox,
  sectionSubHeadingText,
  subTabScreenContainer,
  surfaceInfoCards,
} from "../../styles";

const Commercial = (props) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          //uri: "https://public.tableau.com/views/10_0ClinicAnalytics/ClinicAnalytics?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n",
          uri: "https://prod.demoapac.tableau.com/t/SalesforceDemoSite/views/UKBankCustomer-test/Dashboard1?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n",
        }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
  },
  webview: {
    flex: 1,
  },
});
export default Commercial;
