import { StyleSheet } from 'react-native';
const styleLeaderBoard = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    padding: 20,
    maxWidth: 320,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6
  },
  row: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginRight: 10
  },
  containerTitle: {
    alignItems: "center",
    marginVertical: 8
  },
  title: {
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: 500
  },
  name: {
    marginLeft: 5,
    fontWeight: "bold"
  },
  score: {
    marginLeft: 5,
    fontWeight: "bold"
  }
});
export default styleLeaderBoard;