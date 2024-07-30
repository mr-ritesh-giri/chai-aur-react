import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(11);

  const addValue = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);

    if (count < 20) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prevCount) => prevCount);
    }
  };
  const decValue = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(count);
    }
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={addValue}>Value ++</button>
      <br />
      <br />
      <button onClick={decValue}>Value --</button>
    </>
  );
}

export default App;
