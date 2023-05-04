import { StyleSheet, Dimensions } from "react-native";
const choiceStyles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: Dimensions.get("window").width < 500 ? 90 : 150,
    height: Dimensions.get("window").width < 500 ? 90 : 150
  }
});
export default choiceStyles;