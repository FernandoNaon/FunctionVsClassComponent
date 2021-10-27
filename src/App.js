import logo from "./logo.svg";
import "./App.css";
import { CounterFunction } from "./components/CounterFunction.jsx";
import CounterClass from "./components/CounterClass";

function App() {
  return (
    <div className="App">
      <div className="containerH">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="container">
        <CounterFunction />
        <CounterClass />
      </div>
    </div>
  );
}

export default App;
