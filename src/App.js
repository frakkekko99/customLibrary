import { View } from "react-native";
import ButtonDefault from "./components/buttonDefault/ButtonDefault";
import Game from "./components/game/Game";
import LeaderBoard from "./components/leaderBoard/LeaderBoard";

function App() {
  const sayHello = () => {
    console.log("Hello");
  };

  function inputName(e) {
    console.log("input", e);
  }

  function display(winner) {
    console.log(winner);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/* <Game userName="fra" onGameEnd={display} /> */}
        <LeaderBoard />
      </View>
    </View>
  );
}

export default App;
