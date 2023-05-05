import React from "react";
import { Text, Pressable } from "react-native";

// Styles
import buttonDefaultStyles from "./buttonDefalutStyles";

// Prop Types
import PropTypes from "prop-types";

function ButtonDefault(props) {
  const onButtonPressed = (e) => {
    props.onButtonPressed(e);
  };

  return (
    <Pressable
      style={buttonDefaultStyles.buttonPrimary}
      onPress={onButtonPressed}
    >
      <Text style={buttonDefaultStyles.text}>{props.label}</Text>
    </Pressable>
  );
}

ButtonDefault.defaultProps = {
  label: "Button",
};

ButtonDefault.propTypes = {
  label: PropTypes.string,
  onButtonPressed: PropTypes.func.isRequired,
};

export default ButtonDefault;
