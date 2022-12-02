import { useState } from "react";

const HideEx = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <div>{visible && "안녕하세요"}</div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "사라져라" : "보여라"}
      </button>
    </div>
  );
  // const [display, setDisplay] = useState({ display: "block" });
  // const [text, setText] = useState("사라져라");

  // const hideBtn = () => {
  //   setDisplay({ display: "none" });
  //   setText("보여라");
  // };

  // const showBtn = () => {
  //   setDisplay({ display: "block" });
  //   setText("사라져라");
  // };

  // return (
  //   <div>
  //     {/* <button onClick={text === "사라져라" ? hideBtn : showBtn}>{text}</button>
  //     <div style={display}>안녕하세요</div> */}
  //     <button
  //       onClick={
  //         (text === "사라져라" && hideBtn) || (text === "보여라" && showBtn)
  //       }
  //     >
  //       {text}
  //     </button>
  //     <div style={display}>안녕하세요</div>
  //   </div>
  // );
};

export default HideEx;
