import { Dimensions } from "react-native";
import colors from "../assets/colors/colors";

export const container = {
  flex: 1,
  backgroundColor: colors.background,
  marginBottom: 0,
};

export const headerWithBackNav = {
  height: 140,
  backgroundColor: colors.theme,
};

export const headerWithoutSearch = {
  height: 130,
  backgroundColor: colors.theme,
  padding: 10,
};

export const headerContainer = {
  marginTop: 60,
  marginLeft: 10,
};

export const sectionSubHeadingBox = {
  justifyContent: "space-between",
  padding: 15,
  flexDirection: "row",
};

export const sectionSubHeadingText = {
  fontWeight: "bold",
  fontSize: 17,
};

export const prevPageLink = {
  marginHorizontal: 1,
  color: colors.white,
  fontSize: 15,
};

export const subTabText = {
  fontSize: 15,
  color: colors.theme,
  fontFamily: "ProximaNova",
  alignContent: "space-between",
  marginLeft: 8,
};

export const activeSubTabButton = {
  alignItems: "center",
  flex: 1,
  backgroundColor: colors.white,
  padding: 10,
  borderBottomColor: colors.theme,
  borderBottomWidth: 5,
};

export const inactiveSubTabButton = {
  alignItems: "center",
  flex: 1,
  backgroundColor: colors.white,
  padding: 10,
};

export const subTabScreenContainer = {
  backgroundColor: colors.white,
  height: "100%",
  marginBottom: 30,
};

export const surfaceInfoCards = {
  margin: 5,
  height: 90,
  width: "90%",
  justifyContent: "center",
  alignSelf: "center",
  alignItems: "center",
  padding: 10,
  elevation: 2,
};

export const prevPageLinkContentBox = {
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
};

export const summaryOverallBox = {
  height: 300,
  backgroundColor: colors.white,
  justifyContent: "space-between",
};

export const summaryBoxRow = {
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100%",
  height: 100,
};

export const summaryBoxTitleBox = {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 5,
  width: (Dimensions.get("window").width / 2) * 0.85,
};

export const summaryBoxContent = {
  fontSize: 20,
  color: colors.black,
  width: (Dimensions.get("window").width / 2) * 0.85,
  padding: 5,
  fontWeight: "bold",
};

export const summaryBoxSubContent = {
  fontSize: 12,
  color: colors.black,
  fontWeight: "bold",
};

export const summaryBoxSubContentContainer = {
  flexDirection: "row",
  padding: 5,
};

export const summaryBoxTitle = {
  fontWeight: "bold",
  fontSize: 13,
  color: colors.theme,
};

export const verticleLine = {
  height: "80%",
  width: 1,
  backgroundColor: colors.line,
  alignSelf: "center",
};

export const horizontalLine = {
  borderWidth: 1,
  width: "92%",
  alignSelf: "center",
  borderColor: colors.line,
};
