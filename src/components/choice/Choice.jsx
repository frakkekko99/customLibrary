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
  return (
    <View style={choiceStyles.mainContainer}>
      {props.inputChoice === 0 && (
        <Image source={paper} style={{ width: 150, height: 150 }} />
      )}
      {props.inputChoice === 1 && (
        <Image source={scissors} style={{ width: 150, height: 150 }} />
      )}
      {props.inputChoice === 2 && (
        <Image source={rock} style={{ width: 150, height: 150 }} />
      )}
    </View>
  );
}

export default Choice;
