import { StyleSheet } from "react-native";

const styleLeaderBoard = StyleSheet.create({
  container: {
    backgroundColor: "#282c34",
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,

    // boxShadow: "10px 10px 14px 5px rgba(0,0,0,0.2)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  row: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
  containerTitle: {
    alignItems: "center",
    marginVertical: 8,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: 500,
    color: "#fff",
  },
  name: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "bold",
    color: "#61dafb",
  },
  scoreContainer: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 15,
  },
  score: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#61dafb",
    fontSize: 18,
  },
  flatListWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styleLeaderBoard;
