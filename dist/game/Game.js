import React, { useRef, useState } from "react";
import { View, Text } from "react-native";

// Styles
import gameStyles from "./gameStyles";

// Components
import ButtonDefault from "../buttonDefault/ButtonDefault";
import Choice from "../choice/Choice";

// Prop Types
import PropTypes from "prop-types";
function Game(props) {
  let resultMatrix = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]];
  let [userChoice, setUserChoice] = useState(null);
  let [cpuChoice, setCpuChoice] = useState(null);
  let [userWinCounter, setUserWinCounter] = useState(0);
  let [cpuWinCounter, setCpuWinCounter] = useState(0);
  let [winnerMessage, setWinnerMessage] = useState("");
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
    let winnerMessage = "";
    if (turnResultRef.current.length === 3) {
      let winnerObj = {
        name: props.userName
      };
      if (userWinCounterRef.current > cpuWinCounterRef.current) {
        console.log("User wins");
        winnerMessage = `${props.userName} wins, +150`;
        userScoreRef.current += 150;
        winnerObj = {
          ...winnerObj,
          result: "win",
          score: 150
        };
      } else if (userWinCounterRef.current < cpuWinCounterRef.current) {
        console.log("Cpu wins");
        winnerMessage = `${props.userName} loses, -50`;
        userScoreRef.current -= 50;
        winnerObj = {
          ...winnerObj,
          result: "lose",
          score: -50
        };
      } else {
        console.log("Tie");
        winnerMessage = "Tie";
        winnerObj = {
          ...winnerObj,
          result: "tie",
          score: 0
        };
      }
      props.onGameEnd(winnerObj);
      userChoiceRef.current = null;
      turnResultRef.current = [];
      userWinCounterRef.current = 0;
      cpuWinCounterRef.current = 0;
    }
    console.log("UserScore:", userScoreRef.current);
    setCpuWinCounter(cpuWinCounterRef.current);
    setUserWinCounter(userWinCounterRef.current);
    setWinnerMessage(winnerMessage);
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
  return /*#__PURE__*/React.createElement(View, {
    style: gameStyles.mainContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: gameStyles.internalWrapper
  }, /*#__PURE__*/React.createElement(View, {
    style: gameStyles.choiceContainer
  }, /*#__PURE__*/React.createElement(Choice, {
    inputChoice: cpuChoice
  }), /*#__PURE__*/React.createElement(View, {
    style: gameStyles.turnResult
  }, winnerMessage === "" && /*#__PURE__*/React.createElement(Text, {
    style: gameStyles.text
  }, props.userName, ":", " ", /*#__PURE__*/React.createElement(Text, {
    style: gameStyles.textRoundCounter
  }, userWinCounter), " ", "- CPU:", " ", /*#__PURE__*/React.createElement(Text, {
    style: gameStyles.textRoundCounter
  }, cpuWinCounter)), winnerMessage !== "" && /*#__PURE__*/React.createElement(Text, {
    style: gameStyles.textWinnerMsg
  }, winnerMessage)), /*#__PURE__*/React.createElement(Choice, {
    inputChoice: userChoice
  })), /*#__PURE__*/React.createElement(View, {
    style: gameStyles.choiseButtonContainer
  }, /*#__PURE__*/React.createElement(ButtonDefault, {
    label: "Rock",
    onButtonPressed: setRock
  }), /*#__PURE__*/React.createElement(ButtonDefault, {
    label: "Paper",
    onButtonPressed: setPaper
  }), /*#__PURE__*/React.createElement(ButtonDefault, {
    label: "Scissors",
    onButtonPressed: setScissors
  }))));
}
Game.defaultProps = {
  onGameEnd: () => {
    console.log("Game Over");
  }
};
Game.propTypes = {
  userName: PropTypes.string.isRequired,
  onGameEnd: PropTypes.func
};
export default Game;