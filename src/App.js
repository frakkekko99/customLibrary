import logo from "./logo.svg";
import "./App.css";
import ButtonDefault from "./components/buttonDefault/ButtonDefault";

function App() {
  const sayHello = () => {
    console.log("Hello");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonDefault label={"Custom Button"} onButtonPressed={sayHello} />
      </header>
    </div>
  );
}

export default App;
