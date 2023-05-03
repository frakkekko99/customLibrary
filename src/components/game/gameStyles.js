import { StyleSheet } from "react-native";

const gameStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#282c34",
  },
  choiseButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  choiceContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default gameStyles;
