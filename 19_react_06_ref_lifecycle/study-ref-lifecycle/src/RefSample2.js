import { useRef, useState } from "react";

const RefSample2 = () => {
  // 1. ref 객체 만들기
  const id = useRef(1); // 기본 값 1 설정

  const [num, setNum] = useState(1);

  const plusId = () => {
    // 2. ref.current를 로컬 변수로 사용
    id.current += 1;
    console.log(id.current);
  };

  const plusNum = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <h2>{id.current}</h2>
      <button onClick={plusId}>puls Ref</button>
      <h2>{num}</h2>
      <button onClick={plusNum}>puls State</button>
    </div>
  );
};

export default RefSample2;
