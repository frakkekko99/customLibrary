import { View } from "react-native";
import ButtonDefault from "./components/buttonDefault/ButtonDefault";
import Game from "./components/game/Game";
import LeaderBoard from "./components/leaderBoard/LeaderBoard";
import TextInputDefault from "./components/textInputDefault/TextInputDefault";

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
    <View
      style={{
        flex: 1,
        height: "100vh",
        backgroundColor: "#282c34",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Game userName="fra" onGameEnd={display} />
        {/* <LeaderBoard users={users} /> */}
        {/* <TextInputDefault
          labelInput={"Username"}
          placeholderInput={"Insert username"}
          handleInput={() => console.log("input")}
        /> */}
      </View>
    </View>
  );
}

export default App;
