import { useState } from "react";

const ColorEx = () => {
  const [color, setColor] = useState({ color: "black" });
  const [text, setText] = useState("검정");

  const redColor = () => {
    setColor({ color: "red" });
    setText("빨간");
  };

  const blueColor = () => {
    setColor({ color: "blue" });
    setText("파란");
  };

  return (
    <div>
      <div style={color}>{text}색 글씨</div>
      <button onClick={redColor}>빨간색</button>
      <button onClick={blueColor}>파란색</button>
    </div>
  );
};

export default ColorEx;
