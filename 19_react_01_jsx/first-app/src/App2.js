import "./App.css";
import React from "react";

function App() {
  const name = "kang";
  const animal = "강아지";

  const a = 2;
  const b = 1;

  const title = "Hello World";

  return (
    <div className="App">
      {/* JSX 실습 첫번째 문제 */}
      <div>
        이것은 div 입니다
        <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      </div>
      <hr />

      {/* JSX 실습 두번째 문제 */}
      <h2>
        제 반려동물의 이름은 {name}입니다. <br /> {name}은 {animal}입니다.
      </h2>
      <hr />

      {/* JSX 실습 세번째 문제 */}
      {3 + 5 === 8 ? "정답입니다" : "오답입니다"}
      <hr />

      {/* JSX 실습 네번째 문제 */}
      {a > b && "a가 b보다 큽니다"}
      <hr />

      {/* JSX 실습 다섯번째 문제 */}
      <div className="test">{title}</div>
      <label htmlFor="id">아이디 : </label>
      <input type="text" className="input" name="id" id="id" />
      <br />
      <label htmlFor="pw">비밀번호 : </label>
      <input type="text" className="input" name="pw" id="pw" />
      <hr />

      {/* JSX 실습 여섯번째 문제 */}
      <div className="rainbow">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
    </div>
  );
}

export default App;
