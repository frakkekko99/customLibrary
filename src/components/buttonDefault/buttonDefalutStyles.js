import { StyleSheet } from "react-native-web";

const buttonDefaultStyles = StyleSheet.create({
  buttonPrimary: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#61dafb",
    padding: 16,
    borderRadius: 10,
    cursor: "pointer",
  },
  text: {
    color: "#000",
    fontWeight: 500,
    fontSize: 18,
  },
});

export default buttonDefaultStyles;
