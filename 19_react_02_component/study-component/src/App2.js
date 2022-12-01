import "./App.css";
import Button2 from "./Button2";
import Food from "./Food.js";
import Profile from "./Profile.js";

function App2() {
  const log = () => {
    console.log("콘솔 띄우기 성공");
  };
  return (
    <div className="App">
      <Food></Food>
      <hr />
      <Profile></Profile>
      <hr />
      <Button2
        text="App 컴포넌트에서 넘겨준 text props 입니다."
        valid={log}
      ></Button2>
    </div>
  );
}

export default App2;

// . 클래스형 컴포넌트를 만드세요.
// 2. text, valid란 props를 생성하세요.
// 3. App 컴포넌트에서 text를 받아와 출력하게 해주세요.
