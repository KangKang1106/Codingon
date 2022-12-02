import { useState } from "react";

const SyntheticEvent = () => {
  const [text, setText] = useState("초기값");

  const PrintSyntheticEvent = (e) => console.log(e);

  const SetInputValue = (e) => setText(e.target.value);

  const showAlert = () => {
    alert(`input 입력값은 ${text}`);
    setText("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      showAlert();
    }
  };

  return (
    <div>
      <button onClick={PrintSyntheticEvent}>SyntheticEvent 확인</button>
      <br />
      <input
        type="text"
        placeholder="입력하세요"
        onChange={SetInputValue}
        onKeyPress={onKeyPress}
        value={text}
      />
      <button onClick={showAlert}>버튼</button>
    </div>
  );
};

export default SyntheticEvent;
