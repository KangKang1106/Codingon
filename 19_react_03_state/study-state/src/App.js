import "./App.css";
import Counter from "./Counter";
import SayFunction from "./SayFunction";
import CounterFunction from "./CounterFunction";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <hr />
      <SayFunction></SayFunction>
      <hr />
      <CounterFunction value="1 더하기"></CounterFunction>
    </div>
  );
}

export default App;
