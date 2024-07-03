import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(11);

  const addValue = () => {
    setcount(count + 1);
    if (count == 20) {
      setcount(count);
    }
  };
  const decValue = () => {
    setcount(count - 1);
    if (count == 0) {
      setcount(count);
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
