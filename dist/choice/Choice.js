import React from "react";
import { View, Text, Platform, Image } from "react-native";
import choiceStyles from "./choiceStyle";
import { Player } from "@lottiefiles/react-lottie-player";
import rock from "../../assets/rock.png";
import paper from "../../assets/paper.png";
import scissors from "../../assets/scissors.png";

//carta = 0
//forbice = 1
//sasso = 2

function Choice(props) {
  return /*#__PURE__*/React.createElement(View, {
    style: choiceStyles.mainContainer
  }, props.inputChoice === 0 && /*#__PURE__*/React.createElement(Image, {
    source: paper,
    style: {
      width: 150,
      height: 150
    }
  }), props.inputChoice === 1 && /*#__PURE__*/React.createElement(Image, {
    source: scissors,
    style: {
      width: 150,
      height: 150
    }
  }), props.inputChoice === 2 && /*#__PURE__*/React.createElement(Image, {
    source: rock,
    style: {
      width: 150,
      height: 150
    }
  }));
}
export default Choice;