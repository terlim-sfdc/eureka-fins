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

const Investment = (props) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://public.tableau.com/views/BankInvestmentData/SegmentationDashboard?:language=en-GB&:display_count=n&:origin=viz_share_link?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n",
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
export default Investment;
