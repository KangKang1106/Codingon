import { useState, useEffect } from "react";

// 자식 컴포넌트
const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    // Mount 시점에 실행
    console.log("⭕ mount");

    return () => {
      console.log("❌ unmount");
    };
  }, []);

  // Mount & UnMount 시점에 실행
  useEffect(() => {
    console.log("❗ update");
  });

  // text가 바뀔 때(update)만 실행
  useEffect(() => {
    console.log("only text state update", text);
  }, [text]);

  return (
    <div>
      <p>MyComponent {number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

// 부모 컴포넌트
const LifeCycleFunc = () => {
  const [number, setNumber] = useState(3);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1);
  };

  const changeVisibleState = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <h1>함수형 컴포넌트에서 LifeCycle 이해하기</h1>
      <button onClick={changeNumberState}>plus</button>
      <button onClick={changeVisibleState}>on/off</button>
      {visible && <MyComponent number={number} />}
    </div>
  );
};

export default LifeCycleFunc;
