import React from "react";
import { Text, Pressable } from "react-native";

// Styles
import buttonDefaultStyles from "./buttonDefalutStyles";

// Prop Types
import PropTypes from "prop-types";
function ButtonDefault(props) {
  const onButtonPressed = e => {
    props.onButtonPressed(e);
  };
  return /*#__PURE__*/React.createElement(Pressable, {
    style: buttonDefaultStyles.buttonPrimary,
    onPress: onButtonPressed
  }, /*#__PURE__*/React.createElement(Text, {
    style: buttonDefaultStyles.text
  }, props.label));
}
ButtonDefault.defaultProps = {
  label: "Button"
};
ButtonDefault.propTypes = {
  label: PropTypes.string,
  onButtonPressed: PropTypes.func.isRequired
};
export default ButtonDefault;