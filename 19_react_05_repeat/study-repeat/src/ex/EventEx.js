import { useState } from "react";

const EventEx = () => {
  const [imfors, setImfors] = useState([
    { name: "코디", email: "codi@gmail.com" },
    { name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const addImfor = (e) => {
    const newImfor = imfors.concat({
      name: inputName,
      email: inputEmail,
    });
    setImfors(newImfor);
    setInputName("");
    setInputEmail("");
  };

  const deleteName = (name) => {
    const result = imfors.filter((a) => a.name !== name);
    setImfors(result);
  };

  return (
    <div>
      <h1>실습 51</h1>

      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="이름"
      />
      <input
        type="email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        placeholder="이메일"
      />
      <button onClick={addImfor}>등록</button>
      <div>
        {imfors.map((a) => {
          return (
            <div
              key={a.name}
              onDoubleClick={() => {
                deleteName(a.name);
              }}
            >
              {a.name} : {a.email}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventEx;
