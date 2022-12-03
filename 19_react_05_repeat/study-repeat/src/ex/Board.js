import { useState } from "react";

const Board = () => {
  const [results, setResults] = useState([]);

  const [userId, setUserId] = useState(1);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");

  const addresult = (e) => {
    const newresult = results.concat({
      userId: userId,
      writer: writer,
      title: title,
    });

    setUserId(userId + 1);
    setResults(newresult);
    setWriter("");
    setTitle("");
  };

  return (
    <div>
      <h1>실습 52</h1>

      <fieldset>
        작성자 :
        <input
          type="text"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
          placeholder="작성자"
        />
        제목 :
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addresult}>작성</button>
      </fieldset>
      <br />
      <br />

      <table border="1" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <td>번호</td>
            <td>작성자</td>
            <td>제목</td>
          </tr>
        </thead>
        <tbody>
          {results.map((a) => {
            return (
              <tr key={a.userId}>
                <td>{a.userId}</td>
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
