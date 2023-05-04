import React from "react";
import { TextInput, View, Text } from "react-native";

// Style
import textInputStyle from "./textInputStyle";

// PropTypes
import PropTypes from "prop-types";
function TextInputDefault(props) {
  function callback(e) {
    props.handleInput(e);
    // console.log(e)
  }

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, {
    style: textInputStyle.label
  }, props.labelInput), /*#__PURE__*/React.createElement(TextInput, {
    style: textInputStyle.default,
    onChangeText: callback,
    placeholder: props.placeholderInput,
    placeholderTextColor: "#ccc"
  }));
}
TextInputDefault.defaultProps = {
  labelInput: "Write your name"
};
TextInputDefault.propTypes = {
  labelInput: PropTypes.string,
  handleInput: PropTypes.func.isRequired
};
export default TextInputDefault;