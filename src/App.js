import { View } from "react-native";
import ButtonDefault from "./components/buttonDefault/ButtonDefault";
import Game from "./components/game/Game";
import LeaderBoard from "./components/leaderBoard/LeaderBoard";

const users = [
  {
    name: "Luigi",
    id: Math.floor(Math.random() * 100000),
    score: 10,
  },
  {
    name: "Fra",
    id: Math.floor(Math.random() * 100000),
    score: 15,
  },
  {
    name: "Paolo",
    id: Math.floor(Math.random() * 100000),
    score: 20,
  },
];

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
        <Game userName="fra" onGameEnd={display} />
        {/* <LeaderBoard users={users} /> */}
      </View>
    </View>
  );
}

export default App;
