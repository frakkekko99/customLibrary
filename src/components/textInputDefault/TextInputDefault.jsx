import React from "react";
import { TextInput, View, Text } from "react-native";

// Style
import textInputStyle from "./textInputStyle";

// PropTypes
import PropTypes from "prop-types";
import { Platform } from "react-native-web";

function TextInputDefault(props) {
  function callback(e) {
    props.handleInput(e);
    // console.log(e)
  }
  return (
    <View>
      <Text style={textInputStyle.label}>{props.labelInput}</Text>

      <TextInput
        style={textInputStyle.default}
        onChangeText={callback}
        placeholder={props.placeholderInput}
        placeholderTextColor={"#ccc"}
      />
    </View>
  );
}

TextInputDefault.defaultProps = {
  labelInput: "Write your name",
};

TextInputDefault.propTypes = {
  labelInput: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
};

export default TextInputDefault;
