
// Components
import ButtonDefault from "./components/buttonDefault/ButtonDefault";
import TextInputDefault from './components/textInputDefault/TextInputDefault';

function App() {

  const sayHello = () => {
    console.log("Hello");
  };

  function inputName(e) {
    console.log("input", e)
  }

  return (
    <div className="App">

      <ButtonDefault label={ "Custom Button" } onButtonPressed={ sayHello } />

      <TextInputDefault
        placeholderInput="write your name"
        handleInput={ inputName }
      />

    </div>
  );
}

export default App;
