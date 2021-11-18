import colors from "../assets/colors/colors";

export const container = {
  flex: 1,
  backgroundColor: colors.background,
  marginBottom: 0,
};

export const headerWithSearch = {
  height: 177,
  backgroundColor: colors.theme,
  padding: 10,
};

export const headerWithoutSearch = {
  height: 130,
  backgroundColor: colors.theme,
  padding: 10,
};

export const headerContainer = {
  marginTop: 65,
  marginLeft: 10,
};

export const sectionSubHeadingBox = {
  justifyContent: "space-between",
  padding: 7,
  flexDirection: "row",
  marginHorizontal: 15,
  marginTop: 6,
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
  fontFamily: "BodoniBold",
  alignContent: "space-between",
  marginLeft: 8,
};

export const activeSubTabButton = {
  alignItems: "center",
  flex: 1,
  backgroundColor: colors.white,
  padding: 10,
  borderBottomColor: colors.yellow,
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
  marginTop: 25,
  alignItems: "center",
  padding: 5,
  position: "absolute",
};
