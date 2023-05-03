import { View } from "react-native";
import ButtonDefault from "./components/buttonDefault/ButtonDefault";
import Game from "./components/game/Game";

function App() {
  const sayHello = () => {
    console.log("Hello");
  };

  function inputName(e) {
    console.log("input", e);
  }

  return (
    <View style={{ flex: 1 }}>
      <Game />
    </View>
  );
}

export default App;
