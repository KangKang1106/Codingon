import Origin from "./Origin";
import Sass from "./Sass";
import Worm from "./Worm";
import Clock from "./Clock";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Origin></Origin>
      <hr />
      <Sass></Sass>
      <hr />
      <Worm></Worm>
      <hr />
      <Clock></Clock>
    </div>
  );
}

export default App;
