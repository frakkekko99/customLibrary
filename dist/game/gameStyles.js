import { StyleSheet, Dimensions } from "react-native";
const gameStyles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.9,
    backgroundColor: "#282c34",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18
  },
  internalWrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40
  },
  choiseButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20
  },
  choiceContainer: {
    position: "relative",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
  turnResult: {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: 100,
    width: 200,
    transform: [{
      translateX: -100
    }, {
      translateY: -50
    }],
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    color: "#fff"
  },
  textRoundCounter: {
    color: "#61dafb",
    fontWeight: 600,
    fontSize: 22
  },
  textWinnerMsg: {
    fontSize: 20,
    fontWeight: 600,
    color: "#fff"
  }
});
export default gameStyles;