
import ButtonDefault from "./components/buttonDefault/ButtonDefault";

function App() {

  const sayHello = () => {
    console.log("Hello");
  };

  return (
    <div className="App">

      <ButtonDefault label={ "Custom Button" } onButtonPressed={ sayHello } />


    </div>
  );
}

export default App;
