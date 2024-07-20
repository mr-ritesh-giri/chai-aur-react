import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*`~";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, charactersAllowed, passGenerator]);

  return (
    <>
      <div className="bg-black w-screen h-screen flex flex-col items-center pt-10">
        <div className="bg-gray-700 p-4 rounded-md">
          <div className="text-white text-5xl font-extrabold ">
            Password Generator
          </div>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 my-6">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 font-semibold text-black"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            >
              copy
            </button>
          </div>{" "}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer z-50"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>{" "}
            <div className="flex items-center gap-x-1 ml-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1 ml-2">
              <input
                type="checkbox"
                id="characterInput"
                defaultChecked={charactersAllowed}
                onChange={() => {
                  setCharactersAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
