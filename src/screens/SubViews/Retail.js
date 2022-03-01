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

const Retail = (props) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://public.tableau.com/views/10_0InternationalTourism/InternationalTourism?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n",
        }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 700,
  },
  webview: {
    flex: 1,
  },
});
export default Retail;
