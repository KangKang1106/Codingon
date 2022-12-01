import { useState } from "react";

const Crease = () => {
  const [crease, setMessage] = useState(0);

  const Increase = () => setMessage(crease + 1);
  const Decrease = () => setMessage(crease - 2);

  return (
    <>
      <h1>{crease}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </>
  );
};

export default Crease;
