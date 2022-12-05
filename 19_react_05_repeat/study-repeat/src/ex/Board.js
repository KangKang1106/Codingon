import { useState, useRef } from "react";

const Board = () => {
  const [results, setResults] = useState([]);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");

  const writerRef = useRef();
  const titleRef = useRef();

  const addresult = () => {
    const newResult = {
      writer: writer,
      title: title,
    };

    // ...results: 기존 state 배열의 모든 원소
    // newresult : 새로 추가될 state 배열의 원소
    // [...results, newResult] : 변경된 state 배열
    setResults([...results, newResult]);
    // setResults(newresult);

    setWriter("");
    setTitle("");
  };

  const writerFocus = () => {
    writerRef.current.focus();
  };

  const titleFocus = () => {
    titleRef.current.focus();
  };

  const clickBtn = () => {
    if (writer === "") {
      writerRef.current.focus();
    } else if (title === "") {
      titleRef.current.focus();
    } else {
      const newResult = {
        writer: writer,
        title: title,
      };

      setResults([...results, newResult]);
      setWriter("");
      setTitle("");
    }
  };

  return (
    <div>
      <h1>실습 52</h1>
      <form>
        <fieldset>
          작성자 :
          <input
            type="text"
            id="writer"
            value={writer}
            ref={writerRef}
            onChange={(e) => setWriter(e.target.value)}
            placeholder="작성자"
          />
          제목 :
          <input
            type="text"
            id="title"
            value={title}
            ref={titleRef}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="button"
            // onClick={
            //   (writer === "" && writerFocus) ||
            //   (title === "" ? titleFocus : addresult)
            // }
            onClick={clickBtn}
          >
            작성
          </button>
        </fieldset>
      </form>
      <br />
      <br />

      <table
        border="1"
        cellSpacing="0"
        cellPadding="0"
        style={{ margin: "30px auto", width: "500px" }}
      >
        <thead>
          <tr>
            <td>번호</td>
            <td>작성자</td>
            <td>제목</td>
          </tr>
        </thead>
        <tbody>
          {results.map((a, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{a.writer}</td>
                <td>{a.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
