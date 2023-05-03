import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import gameStyles from "./gameStyles";
import ButtonDefault from "../buttonDefault/ButtonDefault";
import Choice from "../choice/Choice";

//carta = 0
//forbice = 1
//sasso = 2

function Game() {
  let resultMatrix = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ];

  let [userChoice, setUserChoice] = useState(null);
  let [cpuChoice, setCpuChoice] = useState(null);

  let userChoiceRef = useRef(null);
  let turnResultRef = useRef([]);

  let userWinCounterRef = useRef(0);
  let cpuWinCounterRef = useRef(0);

  let userScoreRef = useRef(0);

  function handleTurn() {
    const cpuChoiceCalc = Math.floor(Math.random() * 3);
    setCpuChoice(cpuChoiceCalc);

    const roundWinner = resultMatrix[userChoiceRef.current][cpuChoiceCalc];

    turnResultRef.current.push(roundWinner);

    if (roundWinner === 1) userWinCounterRef.current++;
    if (roundWinner === -1) cpuWinCounterRef.current++;

    if (turnResultRef.current.length === 3) {
      if (userWinCounterRef.current > cpuWinCounterRef.current) {
        console.log("User wins");
        userScoreRef.current += 150;
      } else if (userWinCounterRef.current < cpuWinCounterRef.current) {
        console.log("Cpu wins");
        userScoreRef.current -= 50;
      } else {
        console.log("Tie");
      }
    }
  }

  function setRock() {
    userChoiceRef.current = 2;
    handleTurn();
    setUserChoice(2);
  }

  function setScissors() {
    userChoiceRef.current = 1;
    handleTurn();
    setUserChoice(1);
  }

  function setPaper() {
    userChoiceRef.current = 0;
    handleTurn();
    setUserChoice(0);
  }

  return (
    <View style={gameStyles.mainContainer}>
      <View style={gameStyles.internalWrapper}>
        <View style={gameStyles.choiceContainer}>
          <Choice inputChoice={cpuChoice} />
          <View style={gameStyles.turnResult}></View>
          <Choice inputChoice={userChoice} />
        </View>
        <View style={gameStyles.choiseButtonContainer}>
          <ButtonDefault label={"Rock"} onButtonPressed={setRock} />
          <ButtonDefault label={"Paper"} onButtonPressed={setPaper} />
          <ButtonDefault label={"Scissors"} onButtonPressed={setScissors} />
        </View>
      </View>
    </View>
  );
}

export default Game;
