import React from "react";
import { View, Text } from "react-native";
import gameStyles from "./gameStyles";
import ButtonDefault from "../buttonDefault/ButtonDefault";
import Choice from "../choice/Choice";

function Game() {
  return (
    <View style={gameStyles.mainContainer}>
      <View style={gameStyles.choiceContainer}>
        <Choice inputChoice={1} />
        <Choice inputChoice={0} />
      </View>
      <View style={gameStyles.choiseButtonContainer}>
        <ButtonDefault label={"Rock"} />
        <ButtonDefault label={"Paper"} />
        <ButtonDefault label={"Scissors"} />
      </View>
    </View>
  );
}

export default Game;
