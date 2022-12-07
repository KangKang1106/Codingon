import { useState, useRef } from "react";

const Board = () => {
  const [results, setResults] = useState([]);
  const [results2, setResults2] = useState([]);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");

  const writerRef = useRef();
  const titleRef = useRef();

  const [search, setSearch] = useState("");

  const searchRef = useRef();

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

  const searchBtn = () => {
    if (search === "") {
      searchRef.current.focus();
    }
    const searchResult = results.filter((x) => {
      if (x.writer.includes(search) === true) {
        const newResult2 = {
          writer: x.writer,
          title: x.title,
        };
        // console.log(newResult2);
      }
    });
    setResults2(searchResult);
    console.log(results2);
  };

  return (
    <div>
      <h1>실습 52, 53</h1>
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
          <br />
          <select>
            <option value="작성자">작성자</option>
            <option value="제목">제목</option>
          </select>
          <input
            type="text"
            value={search}
            ref={searchRef}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색어"
          />
          <button type="button" onClick={searchBtn}>
            검색
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
      <h2>댓글 검색 결과</h2>
      <h3>검색 결과가 없습니다.</h3>
      {results2.map((b, idx) => {
        return (
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
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{b.writer}</td>
                <td>{b.title}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Board;
