import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 100);
    navigator.clipboard.writeText(password);
  }, [password]);

  const passRef = useRef(null);

  const handleRangeChange = (e) => {
    setLength(Number(e.target.value));
  };

  return (
    <>
      <div className="bg-[#172121] h-screen w-full pt-9">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  bg-gray-800 text-orange-500">
          <h1 className="text-white text-center text-4xl my-3">
            Password generator
          </h1>
          <div className="text-center ">
            <input
              type="text"
              placeholder="Password"
              value={password}
              ref={passRef}
              className="outline-none w-3/4 px-4 py-1 mt-3 rounded-l-xl"
              readOnly
            />
            <button
              onClick={copyToClipboard}
              className="bg-cyan-900 w-1/4 px-4 py-1 rounded-r-xl"
            >
              Copy!
            </button>
          </div>

          <div className="flex items-center mt-4">
            <input
              type="range"
              min="8"
              max="100"
              value={length}
              onChange={handleRangeChange}
            />
            <label className="ml-2 ">Length: {length} </label>

            <input
              type="checkbox"
              className="ml-3"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label id="number">Number</label>

            <input
              type="checkbox"
              className="ml-3"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label name="char">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
