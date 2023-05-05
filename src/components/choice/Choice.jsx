import React from "react";
import { View, Image } from "react-native";

// Styles
import choiceStyles from "./choiceStyle";

// Prop Types
import PropTypes from "prop-types";

// Images
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";

function Choice(props) {
  return (
    <View style={choiceStyles.mainContainer}>
      {props.inputChoice === 0 && (
        <Image source={paper} style={choiceStyles.image} />
      )}
      {props.inputChoice === 1 && (
        <Image source={scissors} style={choiceStyles.image} />
      )}
      {props.inputChoice === 2 && (
        <Image source={rock} style={choiceStyles.image} />
      )}
    </View>
  );
}

Choice.propTypes = {
  inputChoice: PropTypes.number,
};

export default Choice;
